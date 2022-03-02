import { useContext, useEffect } from 'react';
import Modal from 'react-modal';
import { ThemeContext } from 'styled-components';
import { CancelButton, DeleteButton, ModalText } from './styles';

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  onDelete: () => void;
  pageRootElement?: string;
}

const DeleteCardModal: React.FC<ModalProps> = ({
  isOpen,
  toggleModal,
  onDelete,
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
      contentLabel="Tem certeza que deseja excluir seu card?"
      style={{
        overlay: {
          backgroundColor: theme.modalBackground,
          zIndex: 10,
        },
        content: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          inset: 0,
          margin: 'auto',
          width: '80vw',
          height: 'fit-content',
          border: 'none',
          backgroundColor: theme.body,
        },
      }}
      closeTimeoutMS={300}
    >
      <ModalText>
        Tem certeza que quer apagar seu card? <br />
        Ele não será mais exibido na página do IFPE Open Source.
      </ModalText>
      <DeleteButton onClick={onDelete}>Apagar card</DeleteButton>
      <CancelButton onClick={toggleModal}>Cancelar</CancelButton>
    </Modal>
  );
};

export default DeleteCardModal;
