import styled from 'styled-components';

interface ContainerProps {
  readonly $accent: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100vw !important;
  max-width: 100%;

  background: ${(props) =>
    props.$accent ? props.theme.sectionAccent : 'none'};
`;

export const Content = styled.div`
  max-width: 1088px;

  margin: 0 auto;
  padding: 16px 8px;

  @media (min-width: 768px) {
    padding: 16px;
  }
`;
