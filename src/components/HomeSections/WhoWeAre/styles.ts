import styled from 'styled-components';

export const ReadMoreButton = styled.a`
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
