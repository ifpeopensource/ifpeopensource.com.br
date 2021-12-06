import ghApi from '../services/api';

interface Team {
  id: number;
  name: string;
}

interface Member {
  id: number;
}

export default async function getTeamsByUserId(userId: number) {
  const { data: teams } = await ghApi.get('/orgs/ifpeopensource/teams');

  let userTeamsNames: string[] = [];

  await Promise.all(
    teams.map(async ({ id, name }: Team) => {
      const { data: teamMembers } = await ghApi.get(
        `organizations/${process.env.GH_ORG_ID}/team/${id}/members`
      );

      for (const member of teamMembers) {
        if (member.id === userId) {
          userTeamsNames.push(name);
          break;
        }
      }
    })
  );

  return userTeamsNames;
}
