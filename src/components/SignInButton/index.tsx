import { FaGithub } from 'react-icons/fa';
import { signIn, signOut, useSession } from 'next-auth/client';

import { Button } from './styles';

const SignInButton = () => {
  const [session] = useSession();

  return session ? (
    <Button onClick={() => signOut()} isSignedIn={true}>
      <FaGithub />
      Desconectar-se
    </Button>
  ) : (
    <Button onClick={() => signIn('github')}>
      <FaGithub />
      Entrar com o GitHub
    </Button>
  );
};

export default SignInButton;
