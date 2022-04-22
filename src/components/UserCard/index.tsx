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
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  function getRandomHexColor() {
    return `#${Math.random().toString(16).slice(-6)}`;
  }

  return (
    <Card>
      <UserAvatar src={user.avatarUrl} />
      <UserName>{user.name}</UserName>
      <GhUserContainer
        href={`https://github.com/${user.ghUsername}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={20} />
        <span>{user.ghUsername}</span>
      </GhUserContainer>
      <GroupsContainer>
        {user.teams.map((team) => (
          <span
            key={team}
            style={{
              backgroundColor: teamsConfig[team]?.color || getRandomHexColor(),
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
