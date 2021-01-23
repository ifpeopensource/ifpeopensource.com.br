import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const ModalTitle = styled.h1`
  font-size: 1.78rem;
  font-weight: bold;

  color: ${({ theme }) => theme.text};

  margin: 1.5rem 0 1.2rem 0;
`;

export const ModalText = styled.p`
  font-size: 0.9rem;
  text-indent: 2.5rem;
  line-height: 1.5;
  margin-bottom: 1rem;

  color: ${({ theme }) => theme.text};

  & > ${ModalTitle} {
    margin-bottom: 10px;
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;

export const ModalCloseIcon = styled(MdClose)`
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;

  @media (min-width: 768px) {
    right: 32px;
    top: 32px;
  }
`;

export const CloseModalButton = styled.a`
  color: ${({ theme }) => theme.primary};
  background: transparent;
  text-decoration: none;
  font-size: 0.9rem;
  text-align: center;

  border: 2px solid ${({ theme }) => theme.primary};

  display: block;
  margin: 24px auto 0 auto;
  padding: 4px;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 768px) {
    max-width: 240px;
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;
