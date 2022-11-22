/* eslint-disable object-curly-newline */
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  AiOutlineYoutube as YoutubeIcon,
  AiFillGithub as GithubIcon,
  AiOutlineInstagram as InstagramIcon,
} from 'react-icons/ai';
import { FiMail as EmailIcon } from 'react-icons/fi';

import Image from 'next/image';
import { darkTheme } from '../../styles/theme';

import SocialButton from './SocialButton';
import { Container, Content, Social, ImageButton } from './styles';

import LogoLight from '../../../public/assets/images/logo-vertical-light.svg';
import LogoDark from '../../../public/assets/images/logo-vertical-dark.svg';

const Footer: React.FC = () => {
  const actualTheme = useContext(ThemeContext);

  return (
    <Container>
      <Content>
        {actualTheme === darkTheme ? <LogoLight /> : <LogoDark />}
        <Social>
          <ImageButton
            href="https://hackclub.com"
            aria-label="Hack Club"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://assets.hackclub.com/icon-square.svg"
              width={56}
              height={56}
              alt="Hack Club"
            />
          </ImageButton>
          <SocialButton
            href="https://github.com/ifpeopensource"
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
