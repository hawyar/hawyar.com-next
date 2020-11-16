import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, ::before, ::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-display: swap;
  }
`;
