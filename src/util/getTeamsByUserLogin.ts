import ghApi from '../services/api';

interface Team {
  id: number;
  name: string;
}

export default async function getTeamsByUserId(userId: number) {
  const { data: teams } = await ghApi.get('/orgs/ifpeopensource/teams');

  const userTeamsNames: string[] = [];

  await Promise.all(
    teams.map(async ({ id, name }: Team) => {
      const { data: teamMembers } = await ghApi.get(
        `organizations/${process.env.GH_ORG_ID}/team/${id}/members`
      );

      // eslint-disable-next-line no-restricted-syntax
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
