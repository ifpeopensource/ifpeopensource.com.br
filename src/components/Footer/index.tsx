/* eslint-disable object-curly-newline */
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Link from 'next/link';
import { AiFillGithub as GithubIcon } from 'react-icons/ai';
import { FiMail as EmailIcon } from 'react-icons/fi';

import { darkTheme } from '../../styles/theme';

import SocialButton from './SocialButton';
import { Container, Content, Logo, PolicyContainer, Social } from './styles';

const Footer: React.FC = () => {
  const actualTheme = useContext(ThemeContext);

  return (
    <Container>
      <Content>
        {actualTheme === darkTheme ? (
          <Logo
            src="/assets/images/logo-vertical-light.svg"
            alt="Logo IFPE Open Source"
          />
        ) : (
          <Logo
            src="/assets/images/logo-vertical-dark.svg"
            alt="Logo IFPE Open Source"
          />
        )}
        <Social>
          <SocialButton
            href="https://github.com/ifpe-open-source"
            Icon={GithubIcon}
            label="GitHub"
          />
          <SocialButton
            href="mailto:ifpeopensource@gmail.com"
            Icon={EmailIcon}
            label="E-mail"
          />
        </Social>
        <PolicyContainer>
          <Link href="/terms">Termos de uso</Link>
          <Link href="/privacy">Política de privacidade</Link>
        </PolicyContainer>
      </Content>
    </Container>
  );
};

export default Footer;
