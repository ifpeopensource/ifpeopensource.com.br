import { useContext, useEffect } from 'react';
import Modal from 'react-modal';
import { ThemeContext } from 'styled-components';

import { Bold } from '../../../../styles/sections';
import {
  ModalCloseIcon,
  ModalText,
  ModalTitle,
  CloseModalButton,
} from './styles';

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  pageRootElement?: string;
}

const ReadMoreModal: React.FC<ModalProps> = ({
  isOpen,
  toggleModal,
  pageRootElement,
}) => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (pageRootElement) {
      Modal.setAppElement(document.getElementById('__next'));
    }
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="Quem somos?"
      style={{
        overlay: {
          backgroundColor: theme.modalBackground,
          zIndex: 10,
        },
        content: {
          backgroundColor: theme.body,
          border: 'none',
        },
      }}
      closeTimeoutMS={300}
    >
      <ModalCloseIcon size="40" color={theme.primary} onClick={toggleModal} />
      <ModalTitle>Open source? O que é isso?</ModalTitle>
      <ModalText>
        O termo “open source” significa literalmente “código aberto”. Um código
        ou software open source pode ser usado, copiado, modificado, estudado e
        redistribuído sem nenhuma restrição. O software do aplicativo Zoom, por
        exemplo, é fechado, pois não podemos ver seu código-fonte; já outros
        softwares como o Firefox, OBS, Blender, VLC, entre outros, possuem seu
        código fonte aberto.
      </ModalText>
      <ModalText>
        Já ficou curioso sobre como um aplicativo, software ou site funciona? Se
        ele for open source, você pode aprender e estudar o seu código-fonte!
        Ficou em dúvida se o software que você está usando é seguro? Você e a
        comunidade podem observar <Bold>por conta própria</Bold> se ele
        realmente é seguro. Você possui até mesmo a liberdade de{' '}
        <Bold>sugerir mudanças</Bold> para os desenvolvedores ou{' '}
        <Bold>fazer as mudanças numa cópia que você tiver</Bold>. Liberdade,
        tecnologia e cooperação, assim existe o open source.
      </ModalText>
      <ModalTitle>O que é o IFPE Open Source?</ModalTitle>
      <ModalText>
        Como você pode ter entendido na seção acima, comunidades são inerentes
        ao conceito de open source. E é assim que as comunidades open source
        surgem: diversas{' '}
        <Bold>
          pessoas interessadas e apaixonadas por tecnologia e resolver problemas
          reais - tudo da forma mais livre possível.
        </Bold>{' '}
        Essas comunidades se organizam em um ou mais projetos, sugerindo
        mudanças, discutindo melhorias e adicionando funcionalidades.
      </ModalText>
      <ModalText>
        Em 1991, Linus Torvalds - na época, um estudante da Universidade de
        Helsinki - começou a desenvolver um sistema operacional apenas como um
        um projeto pessoal, para testar as novas funcionalidades do seu novo
        processador Intel 80386. O que eram apenas algumas linhas de código em C
        se tornaram, quase 30 anos depois, em mais de 23,3 milhões de linhas de
        código do maior projeto open source do mundo, o Linux. Hoje, o Linux é
        um dos maiores sistemas operacionais do mundo, impactando a vida de
        bilhões de pessoas; você pode nem saber, mas já usa Linux, já que o
        Android é baseado em Linux. Também pode se dizer que o Linux “roda a
        internet”, já que a esmagadora maioria dos servidores que hospedam sites
        e aplicativos usam Linux. Esta breve história é só um dos incríveis
        casos de sucesso que também acontecem com diversas outras comunidades
        que são apoiadas por empresas como Google, Microsoft, Apple e outras
        gigantes da tecnologia.
      </ModalText>
      <ModalText>
        Nós reconhecemos o{' '}
        <Bold>impacto que pessoas motivadas e interessadas podem ter</Bold>. O
        IFPE Open Source vem do desejo de aproveitar o enorme potencial que a
        comunidade de alunos do IFPE tem de{' '}
        <Bold>
          usar a tecnologia para criar soluções e compartilhá-las com os outros
          para modificar e melhorar o nosso ambiente e o próprio IFPE
        </Bold>
        . E claro, levamos junto todo o conhecimento, experiência e networking
        que uma comunidade desse tipo pode proporcionar.
      </ModalText>
      <CloseModalButton onClick={toggleModal}>Fechar</CloseModalButton>
    </Modal>
  );
};

export default ReadMoreModal;
