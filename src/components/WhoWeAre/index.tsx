import { useState } from 'react';
import Section from '../Section';
import { Description, Title } from '../../styles/sections';
import { ReadMoreButton } from './styles';
import ReadMoreModal from './ReadMoreModal';

const WhoWeAre: React.FC = () => {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }
  return (
    <Section>
      <Title>Quem somos?</Title>
      <Description>
        Uma comunidade de alun@s interessados em computação, programação,
        cultura maker e tecnologia em geral que promove projetos onde podemos
        aproveitar o enorme potencial que a comunidade de alunos do IFPE têm de
        usar a tecnologia para criar soluções e compartilhá-las com os outros
        para modificar e melhorar o nosso ambiente. Junto com isso, levamos todo
        o conhecimento, experiência e networking que uma comunidade deste tipo
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
