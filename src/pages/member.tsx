import { useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { signIn, signOut, useSession } from 'next-auth/client';
import { Session } from 'next-auth';

import Header from '../components/Header';
import SignInButton from '../components/SignInButton';
import UserCard from '../components/UserCard';
import DeleteCardModal from '../components/DeleteCardModal';

import { Container, Content } from '../styles/pages/Member';
import axios from 'axios';
interface MemberProps {
  setTheme(theme: DefaultTheme): void;
}

interface UserSession extends Session {
  ghUsername: string;
  teams: string[];
}

const Member: React.FC<MemberProps> = ({ setTheme }) => {
  const session = useSession()[0] as UserSession;

  const [isDeleteCardModalOpen, setIsDeleteCardModalOpen] = useState(false);

  function toggleDeleteCardModal() {
    setIsDeleteCardModalOpen(!isDeleteCardModalOpen);
  }

  async function deleteCard() {
    axios.delete(`/api/delete-card`).then((res) => {
      if (res.status === 204) {
        signOut();
      }
    });
  }

  return session ? (
    <Container>
      <Header setTheme={setTheme} />
      <Content>
        <p>Obrigado por ser uma pessoa tão incrível, {session.user.name}!</p>
        <UserCard
          user={{
            avatarUrl: session.user.image,
            name: session.user.name,
            ghUsername: session.ghUsername,
            teams: session.teams,
          }}
        />
        <SignInButton
          isSignedIn
          signIn={() => signIn('github')}
          signOut={signOut}
        />
        <span className="deleteCard">
          <a onClick={toggleDeleteCardModal}>Apagar card</a>
        </span>
      </Content>
      <DeleteCardModal
        isOpen={isDeleteCardModalOpen}
        toggleModal={toggleDeleteCardModal}
        onDelete={deleteCard}
        pageRootElement="__next"
      />
    </Container>
  ) : (
    <Container>
      <Header setTheme={setTheme} />
      <Content>
        <p>Para criar seu card de membro, faça login com seu GitHub</p>
        <SignInButton signIn={() => signIn('github')} signOut={signOut} />
      </Content>
    </Container>
  );
};

export default Member;
