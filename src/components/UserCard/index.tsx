import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Card, UserAvatar, UserName } from './styles';

interface UserCardProps {
  user: {
    avatarUrl: string;
    name: string;
    ghUsername: string;
    teams: string[];
  };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card>
      <UserAvatar src={user.avatarUrl} />
      <UserName>{user.name}</UserName>
      <div>
        <FaGithub /> {user.ghUsername}
      </div>
      {user.teams.map((team) => (
        <p key={team}>{team}</p>
      ))}
    </Card>
  );
};

export default UserCard;
