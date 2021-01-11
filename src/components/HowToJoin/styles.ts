import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Button = styled.a`
  background: ${({ theme }) => theme.primary};
  color: #f5f5f5;
  text-decoration: none;
  font-size: 1.3rem;
  text-align: center;

  display: block;
  padding: 8px;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1024px) {
    font-size: 1.78rem;
  }
`;
