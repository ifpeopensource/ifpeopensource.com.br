/* eslint-disable object-curly-newline */
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { AiOutlineYoutube as YoutubeIcon, AiFillGithub as GithubIcon, AiOutlineInstagram as InstagramIcon } from 'react-icons/ai';
import { FiMail as EmailIcon } from 'react-icons/fi';

import { darkTheme } from '../../styles/theme';

import SocialButton from './SocialButton';
import { Container, Content, Logo, Social } from './styles';

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
            href="https://www.instagram.com/ifpeopensource/"
            Icon={InstagramIcon}
            label="Instagram"
          />
          <SocialButton
            href="https://www.youtube.com/channel/UCohCITlP65oacWlymb_zDjA/"
            Icon={YoutubeIcon}
            label="Youtube"
          />
          <SocialButton
            href="mailto:contato@ifpeopensource.com.br"
            Icon={EmailIcon}
            label="E-mail"
          />
        </Social>
      </Content>
    </Container>
  );
};

export default Footer;
