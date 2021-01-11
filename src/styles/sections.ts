import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.78rem;
  font-weight: bold;

  color: ${({ theme }) => theme.text};

  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 0.9rem;

  color: ${({ theme }) => theme.text};

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;
