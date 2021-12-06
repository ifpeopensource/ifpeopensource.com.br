import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { query as q } from 'faunadb';
import axios from 'axios';

import { fauna } from '../../../services/fauna';
import getTeamsByUserLogin from '../../../util/getTeamsByUserLogin';

interface FaunaMember {
  gh_id: string;
  user_teams: string[];
}

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GH_CLIENT_ID,
      clientSecret: process.env.GH_CLIENT_SECRET,
      scope: 'read:user',
    }),
  ],
  callbacks: {
    async session(session) {
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

        const response = await axios.get(
          `https://api.github.com/user/${member.gh_id}`
        );

        return {
          ...session,
          ghUsername: response.data.login,
          teams: member.user_teams,
        };
      } catch {
        return { ...session, ghUsername: null };
      }
    },
    async signIn(user) {
      const { id, email } = user;
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
