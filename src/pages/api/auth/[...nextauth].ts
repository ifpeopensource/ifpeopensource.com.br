import NextAuth, { Profile } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { query as q } from 'faunadb';
import axios from 'axios';

import ghApi from '../../../services/api';
import { fauna } from '../../../services/fauna';
import getTeamsByUserLogin from '../../../util/getTeamsByUserLogin';

interface FaunaMember {
  gh_id: string;
  user_teams: string[];
}

interface GitHubProfile extends Profile {
  organizations_url: string;
  id: number;
  login: string;
}

interface GithubUserEmail {
  email: string;
  primary: boolean;
}

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GH_CLIENT_ID,
      clientSecret: process.env.GH_CLIENT_SECRET,
      authorization:
        'https://github.com/login/oauth/authorize?scope=read:user+read:org+user:email',
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      const ghId = Number(token.sub);

      try {
        const member: FaunaMember = await fauna.query(
          q.Select(['data'], q.Get(q.Match(q.Index('member_by_gh_id'), ghId)))
        );

        const response = await ghApi.get(`/user/${ghId}`);

        return {
          ...session,
          ghUsername: response.data.login,
          ghId,
          teams: member.user_teams,
        };
      } catch {
        return { ...session, ghUsername: null };
      }
    },
    async signIn({ profile, account }) {
      const { data: emails } = await axios.get(
        'https://api.github.com/user/emails',
        {
          headers: {
            Authorization: `Bearer ${account.access_token}`,
          },
        }
      );

      const { email } = emails.filter(
        (data: GithubUserEmail) => !!data.primary
      )[0];

      const { id, login } = profile as GitHubProfile;

      const { status } = await ghApi.get(
        `/orgs/ifpeopensource/members/${login}`,
        {
          headers: {
            Authorization: `Bearer ${account.access_token}`,
          },
        }
      );

      if (status !== 204) {
        return false;
      }

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(q.Match(q.Index('member_by_email'), q.Casefold(email)))
            ),
            q.If(
              q.Not(q.Exists(q.Match(q.Index('member_by_gh_id'), id))),
              q.Create(q.Collection('members'), { data: { gh_id: id, email } }),
              q.Update(
                q.Select('ref', q.Get(q.Match(q.Index('member_by_gh_id'), id))),
                {
                  data: { email },
                }
              )
            ),
            q.Get(q.Match(q.Index('member_by_email'), q.Casefold(email)))
          )
        );

        const userTeams = await getTeamsByUserLogin(id as number);

        await fauna.query(
          q.Update(
            q.Select('ref', q.Get(q.Match(q.Index('member_by_gh_id'), id))),
            {
              data: { user_teams: userTeams },
            }
          )
        );

        return true;
      } catch {
        return false;
      }
    },
  },
});

export default handler;
