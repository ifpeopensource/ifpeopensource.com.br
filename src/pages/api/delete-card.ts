import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { query as q } from 'faunadb';

import { fauna } from '../../services/fauna';

interface GitHubSession extends Session {
  ghId: number;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    res.setHeader('Allow', 'DELETE');
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const session = await (getSession({ req }) as Promise<GitHubSession | null>);
  if (!session) {
    res.status(401).end("You're not logged in");
  }

  try {
    await fauna.query(
      q.Delete(
        q.Select(
          'ref',
          q.Get(q.Match(q.Index('member_by_gh_id'), session.ghId))
        )
      )
    );
  } catch (error) {
    res.status(500).end(error.message);
  }
  res.status(204).end();
}

export default handler;
