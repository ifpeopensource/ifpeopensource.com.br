import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.body};
  min-height: 100vh;
`;

export const Content = styled.main`
  padding-top: 4rem;

  display: flex;
  justify-content: center;

  p {
    font-size: 1.5rem;
  }
`;
