import styled from 'styled-components';

export const ModalText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  text-align: center;

  color: ${({ theme }) => theme.text};

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;

export const DeleteButton = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  border: none;
  cursor: pointer;

  width: 18rem;
  padding: 0.5rem 0;
  border-radius: 0.5rem;

  font-size: 1.3rem;
  color: #f5f5f5;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const CancelButton = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.primary};
  cursor: pointer;

  width: 18rem;
  padding: 0.5rem 0;
  border-radius: 0.5rem;

  font-size: 1.3rem;
  color: ${({ theme }) => theme.primary};

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
