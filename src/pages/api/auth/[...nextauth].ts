import NextAuth, { Profile } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { query as q } from 'faunadb';
import axios from 'axios';

import { withSentry } from '@sentry/nextjs';

import ghApi from '../../../services/api';
import { fauna } from '../../../services/fauna';
import getTeamsByUserLogin from '../../../util/getTeamsByUserLogin';

interface FaunaMember {
  gh_id: string;
  user_teams: string[];
}

interface GitHubProfile extends Profile {
  organizations_url: string;
}

interface GitHubOrganization {
  id: number;
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

      const email = emails.filter((data: GithubUserEmail) => {
        return !!data.primary;
      })[0].email;

      const { id, organizations_url } = profile as GitHubProfile;

      const { data: organizationsData } = await axios.get(organizations_url, {
        headers: {
          Authorization: `Bearer ${account.access_token}`,
        },
      });

      const isMember = organizationsData.filter(
        (organization: GitHubOrganization) =>
          organization.id.toString() === process.env.GH_ORG_ID
      );

      if (isMember.length === 0) {
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

export default withSentry(handler);
