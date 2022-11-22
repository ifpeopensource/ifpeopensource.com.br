import styled from 'styled-components';
import Link from 'next/link';

export const ProjectList = styled.div`
  margin-top: 24px;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`;

export const ShowMoreButton = styled(Link)`
  color: ${({ theme }) => theme.primary};
  background: transparent;
  text-decoration: none;
  font-size: 1.3rem;
  text-align: center;

  border: 2px solid ${({ theme }) => theme.primary};

  display: block;
  margin: 24px auto 0 auto;
  padding: 8px;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 768px) {
    max-width: 288px;
  }

  @media (min-width: 1024px) {
    font-size: 1.78rem;
  }
`;
