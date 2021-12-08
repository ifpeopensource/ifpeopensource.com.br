import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.body};
  min-height: 100vh;
`;

export const Content = styled.main`
  margin: 0 auto;
  padding: 4rem 0.5rem;
  max-width: 1088px;

  @media (min-width: 768px) {
    padding: 4rem 16px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  p {
    font-size: 1.5rem;
  }

  span.deleteCard {
    color: ${({ theme }) => theme.primary};
    text-decoration: underline;

    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
