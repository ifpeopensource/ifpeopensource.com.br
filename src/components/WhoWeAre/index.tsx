import { useEffect, useState } from 'react';

import Section from '../Section';
import { Description, Title } from '../../styles/sections';
import ReadMoreModal from './ReadMoreModal';

import { useScrollBlock } from '../../hooks/useScrollBlock';

import { ReadMoreButton } from './styles';

const WhoWeAre: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    modal ? blockScroll(document) : allowScroll(document);
  }, [modal]);

  function toggleModal() {
    setModal(!modal);
  }
  return (
    <Section>
      <Title>Quem somos?</Title>
      <Description style={{ textIndent: '2.5rem' }}>
        Somos uma comunidade de alunos interessados em computação, programação,
        cultura maker e tecnologia em geral que promove projetos onde podemos
        aproveitar o enorme potencial que a comunidade de alunos do IFPE tem de
        usar a tecnologia para criar soluções e compartilhá-las com os outros
        para modificar e melhorar o nosso ambiente. Junto a isso, levamos todo
        o conhecimento, experiência e networking que uma comunidade desse tipo
        pode proporcionar.
      </Description>
      <ReadMoreButton onClick={toggleModal}>Ler mais</ReadMoreButton>
      <ReadMoreModal
        isOpen={modal}
        toggleModal={toggleModal}
        pageRootElement="__next"
      />
    </Section>
  );
};

export default WhoWeAre;
