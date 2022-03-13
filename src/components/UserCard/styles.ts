import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.detail};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 768px;
  padding: 2rem;
  border-radius: 0.5rem;
`;

export const GhUserContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;
  margin-top: 0.5rem;
  text-decoration: none;
  color: #fafafa;
  text-align: center;
`;

export const UserAvatar = styled.img`
  width: 10rem;
  border-radius: 50%;
`;

export const UserName = styled.strong`
  font-size: 1.3rem;
  margin-top: 1rem;
`;

export const GroupsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  gap: 0.5rem;
  margin-top: 2rem;

  span {
    background-color: #2f769e;
    font-weight: bold;
    text-align: center;
    padding: 0.5rem 0.75rem;
    border-radius: 1rem;
  }
`;
