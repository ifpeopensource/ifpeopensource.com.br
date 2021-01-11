import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.primary};

  width: fit-content;

  border-radius: 50px;
  padding: 8px 16px;
`;

export const Tech = styled.p`
  font-size: 0.9rem;
  font-weight: bold;

  color: #f5f5f5;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
