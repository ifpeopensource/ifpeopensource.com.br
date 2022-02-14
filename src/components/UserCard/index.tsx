import React from 'react';
import { FaGithub } from 'react-icons/fa';

import {
  Card,
  GroupsContainer,
  GhUserContainer,
  UserAvatar,
  UserName,
} from './styles';

import teamsConfig from '../../../teams.json';
interface UserCardProps {
  user: {
    avatarUrl: string;
    name: string;
    ghUsername: string;
    teams: string[];
  };
  isShort?: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ user, isShort }) => {
  function getRandomHexColor() {
    return `#${Math.random().toString(16).slice(-6)}`;
  }

  return (
    <Card>
      <UserAvatar src={user.avatarUrl} />
      <UserName>{user.name}</UserName>
      <GhUserContainer>
        <FaGithub size={20} /> <span>{user.ghUsername}</span>
      </GhUserContainer>
      <GroupsContainer>
        {isShort
          ? (function () {
              const randomTeams = user.teams
                .sort(() => 0.5 - Math.random())
                .slice(0, 2); // Select two random items
              return [
                <span
                  key={randomTeams[0]}
                  style={{
                    backgroundColor:
                      teamsConfig[randomTeams[0]]?.color || getRandomHexColor(),
                  }}
                >
                  {randomTeams[0]}
                </span>,
                <span
                  key={randomTeams[1]}
                  style={{
                    backgroundColor:
                      teamsConfig[randomTeams[1]]?.color || getRandomHexColor(),
                  }}
                >
                  {randomTeams[1]}
                </span>,
              ];
            })()
          : user.teams.map((team) => (
              <span
                key={team}
                style={{
                  backgroundColor:
                    teamsConfig[team]?.color || getRandomHexColor(),
                }}
              >
                {team}
              </span>
            ))}
      </GroupsContainer>
    </Card>
  );
};

export default UserCard;
