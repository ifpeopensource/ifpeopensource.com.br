import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw !important;
  max-width: 100%;

  background: ${({ theme }) => theme.header};
`;

export const Content = styled.footer`
  max-width: 1088px;

  margin: 0 auto;
  padding: 32px 8px;

  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    'Logo Social'
    'Policy Policy';
  gap: 16px;

  @media (min-width: 768px) {
    padding: 32px 16px;
  }

  & > svg {
    grid-area: Logo;
  }
`;

export const Social = styled.div`
  grid-area: Social;

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-wrap: wrap-reverse;
  gap: 16px;
`;

export const PolicyContainer = styled.div`
  grid-area: Policy;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  & > a {
    font-size: 1 rem;

    color: ${({ theme }) => theme.text};
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }
`;
