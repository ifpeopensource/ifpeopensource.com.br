import { FaGithub } from 'react-icons/fa';

import { Button } from './styles';

interface SignInButtonProps {
  isSignedIn?: boolean;
  signIn: () => void;
  signOut: () => void;
}

const SignInButton: React.FC<SignInButtonProps> = ({
  isSignedIn,
  signIn,
  signOut,
}) =>
  isSignedIn ? (
    <Button onClick={signOut} isSignedIn={isSignedIn}>
      <FaGithub />
      Desconectar-se
    </Button>
  ) : (
    <Button onClick={signIn}>
      <FaGithub />
      Entrar com o GitHub
    </Button>
  );

export default SignInButton;
