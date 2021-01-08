/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { darkTheme } from '../../styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 237px;

  display: flex;

  background: ${(props) =>
    (props.theme === darkTheme
      ? 'linear-gradient(90deg, rgba(0, 0, 0, 0.69) 0%, rgba(0, 0, 0, 0.46) 100%)'
      : 'linear-gradient(90deg, rgba(255, 255, 255, 0.62) 0%, rgba(255, 255, 255, 0.25) 100%)')},
    url('/assets/images/IFPE-Light.jpg') no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 1024px) {
    position: absolute;
    top: 0;
    z-index: 0;

    height: 75vh;
    max-height: 700px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  padding: 0 8px;
  margin: 0 auto;

  max-width: 1088px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;

    padding: 0 16px;
    margin-bottom: 5vh;
  }
`;

export const Text = styled.h1`
  font-size: 1.3rem;
  font-weight: normal;
  color: ${({ theme }) => theme.text};

  margin-bottom: 16px;

  @media (min-width: 1024px) {
    font-size: 2.4rem;
    width: 50%;
  }
`;

export const Button = styled.a`
  color: #f5f5f5;
  text-decoration: none;
  font-size: 1.3rem;

  background-color: ${({ theme }) => theme.primary};

  margin-bottom: 24px;
  padding: 8px;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 1024px) {
    font-size: 2.4rem;
    padding: 16px 32px;
    margin-bottom: 16px;
  }
`;
