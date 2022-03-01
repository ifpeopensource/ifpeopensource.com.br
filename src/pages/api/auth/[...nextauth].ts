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
}

interface GitHubOrganization {
  id: number;
}

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GH_CLIENT_ID,
      clientSecret: process.env.GH_CLIENT_SECRET,
      authorization:
        'https://github.com/login/oauth/authorize?scope=read:user+read:org',
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      try {
        const member: FaunaMember = await fauna.query(
          q.Select(
            ['data'],
            q.Get(
              q.Match(
                q.Index('member_by_email'),
                q.Casefold(session.user.email)
              )
            )
          )
        );

        const response = await ghApi.get(`/user/${member.gh_id}`);

        return {
          ...session,
          ghUsername: response.data.login,
          teams: member.user_teams,
        };
      } catch {
        return { ...session, ghUsername: null };
      }
    },
    async signIn({ user, profile }) {
      const { email } = user;
      console.log(user);
      const { id, organizations_url } = profile as GitHubProfile;

      const { data: organizationsData } = await axios.get(organizations_url);

      const isMember = organizationsData.filter(
        (organization: GitHubOrganization) =>
          organization.id.toString() === process.env.GH_ORG_ID
      );

      if (!isMember) {
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
