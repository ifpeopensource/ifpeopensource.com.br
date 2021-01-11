import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-decoration: none;

  background: ${({ theme }) => theme.detail};
  padding: 8px;
  border-radius: 8px;
`;

export const ProjectImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;

  border-radius: 8px;
`;

export const ProjectTitle = styled.h2`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.text};
  margin-top: 8px;

  @media (min-width: 768px) {
    font-size: 1.78rem;
  }
`;

export const ProjectTechs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-top: 16px;
`;
