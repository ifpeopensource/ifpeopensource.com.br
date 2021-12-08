import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import { query as q } from 'faunadb';

import { fauna } from '../../services/fauna';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'DELETE') {
    res.setHeader('Allow', 'DELETE');
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const session = await getSession({ req });
  if (!session) {
    res.status(401).end("You're not logged in");
  }

  try {
    await fauna.query(
      q.Delete(
        q.Select(
          'ref',
          q.Get(
            q.Match(q.Index('member_by_email'), q.Casefold(session.user.email))
          )
        )
      )
    );
  } catch (error) {
    res.status(500).end(error.message);
  }
  return res.status(204).end();
};
