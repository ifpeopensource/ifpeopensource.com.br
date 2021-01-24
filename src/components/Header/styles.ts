/* eslint-disable operator-linebreak */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => `${theme.header}CC`};
  backdrop-filter: blur(10px);
  max-width: 100%;

  position: sticky;
  top: 0;

  ${(props) =>
    props.className === 'pageTop' &&
    css`
      @media (min-width: 1024px) {
        position: absolute;

        background:
        backdrop-filter: none;

        z-index: 10;
        background: transparent;
        width: 100vw;

        border: none !important;
      }
  `};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 1rem 0.5rem;
  justify-content: space-between;
  max-width: 1088px;

  @media (min-width: 768px) {
    padding: 16px 16px;
  }

  /**
    As propriedades a seguir foram copiadas do tema padrão da biblioteca react-toggle.
    Para mais informações, veja: https://github.com/aaronshaf/react-toggle
  */

  .react-toggle {
    touch-action: pan-x;

    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;
    zoom: 1.3;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  .react-toggle-screenreader-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .react-toggle--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    -webkit-transition: opacity 0.25s;
    transition: opacity 0.25s;
  }

  .react-toggle-track {
    width: 50px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.detail};
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  .react-toggle-track-check {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    left: 8px;
    opacity: 0;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-check {
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle-track-x {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    right: 10px;
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-x {
    opacity: 0;
  }

  .react-toggle-thumb {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.text};

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }

  .react-toggle--checked .react-toggle-thumb {
    left: 27px;
  }

  ${(props) =>
    props.className === 'pageTop' &&
    css`
      @media (min-width: 1024px) {
        .react-toggle {
          margin-left: auto;
          margin-top: 5vh;
        }
      }
    `};
`;

export const Logo = styled.img`
  overflow: visible;

  @media (min-width: 1024px) {
    zoom: 1.2;
  }

  ${(props) =>
    props.className === 'pageTop' &&
    css`
      @media (min-width: 1024px) {
        position: absolute;
        top: 3vw !important;

        zoom: 2.5;
      }
    `};
`;
