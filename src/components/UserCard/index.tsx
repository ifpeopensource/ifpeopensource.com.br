import React from 'react';
import { FaGithub } from 'react-icons/fa';

import {
  Card,
  GroupsContainer,
  GhUserContainer,
  UserAvatar,
  UserName,
} from './styles';

import getRandomArrayItems from '../../util/getRandomArrayItems';

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
      <GhUserContainer href={`https://github.com/${user.ghUsername}`} target="_blank" rel="noopener noreferrer">
        <FaGithub size={20} />
        <span>{user.ghUsername}</span>
      </GhUserContainer>
      <GroupsContainer>
        {isShort
          ? (function getRandomTeams() {
              const randomTeams = getRandomArrayItems(user.teams, 2);
              return [
                !!randomTeams[0] && (
                  <span
                    key={randomTeams[0]}
                    style={{
                      backgroundColor:
                        teamsConfig[randomTeams[0]]?.color ||
                        getRandomHexColor(),
                    }}
                  >
                    {randomTeams[0]}
                  </span>
                ),
                !!randomTeams[1] && (
                  <span
                    key={randomTeams[1]}
                    style={{
                      backgroundColor:
                        teamsConfig[randomTeams[1]]?.color ||
                        getRandomHexColor(),
                    }}
                  >
                    {randomTeams[1]}
                  </span>
                ),
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

UserCard.defaultProps = {
  isShort: false,
};

export default UserCard;
