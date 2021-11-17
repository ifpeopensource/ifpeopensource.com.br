import styled from 'styled-components';

interface ButtonProps {
  backgroundColor?: string;
}

export const Button = styled.button`
  cursor: pointer;
  height: 3rem;
  border-radius: 8px;
  background: ${(props: ButtonProps) => props.backgroundColor || '#333333'};
  border: 0;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
  font-weight: bold;

  svg {
    width: 20px;
    height: 20px;
  }

  svg:first-child {
    margin-right: 1rem;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
