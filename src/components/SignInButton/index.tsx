import { FaGithub } from 'react-icons/fa';

import { Button } from './styles';

const SignInButton = () => {
  return (
    <Button>
      <FaGithub />
      Entrar com o GitHub
    </Button>
  );
};

export default SignInButton;
