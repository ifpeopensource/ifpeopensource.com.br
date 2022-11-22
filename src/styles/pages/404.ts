import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.body};
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Roboto Mono', 'Courier New', Courier, monospace;
    font-size: 10rem;
    color: ${({ theme }) => theme.primary};

    @media (prefers-reduced-motion: no-preference) {
      animation: glitch 5s steps(1, end) infinite;
    }
  }

  @keyframes glitch {
    0% {
      opacity: 0.2;
      transform: translate(0, 0);
    }

    2% {
      opacity: 1;
      transform: translate(-5%, 2%);
    }

    5% {
      opacity: 1;
      transform: translate(0, 0);
    }

    24% {
      opacity: 0.2;
      transform: translate(0, 0);
    }

    25% {
      opacity: 1;
      transform: translate(2%, 1%);
    }

    28% {
      opacity: 1;
      transform: translate(0, 0);
    }

    74% {
      opacity: 0.2;
      transform: translate(0, 0);
    }

    75% {
      opacity: 1;
      transform: translate(2%, -5%);
    }

    78% {
      opacity: 1;
      transform: translate(0, 0);
    }

    88% {
      opacity: 0.2;
      transform: translate(0, 0);
    }

    89% {
      opacity: 1;
      transform: translate(2%, 0);
    }

    92% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.text};

    @media (prefers-reduced-motion: no-preference) {
      animation: float 5s infinite;
    }
  }

  @keyframes float {
    from {
      transform: translateY(0);
      scale: 1;
    }

    50% {
      transform: translateY(10%);
      scale: 1.01;
    }

    to {
      transform: translateY(0);
      scale: 1;
    }
  }
`;

export const GoBackButton = styled(Link)`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 700;

  opacity: 1;
  transition: opacity 0.2s;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    opacity: 0.6;
  }
`;
