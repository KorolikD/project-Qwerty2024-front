import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-display: swap;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('./fonts/roboto-v30-latin-regular.woff2') format('woff2'); 
  }
  @font-face {
    font-display: swap; 
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url('./fonts/roboto-v30-latin-500.woff2') format('woff2'); 
  }
  @font-face {
    font-display: swap; 
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: url('./fonts/roboto-v30-latin-700.woff2') format('woff2'); 
  }


  body {
    font-family: ${({ theme }) => theme.fonts.mainFont};
    background-color: ${({ theme }) => theme.colors.black};
    color:${({ theme }) => theme.colors.white}
  }

  img {
    display: block;
    max-width: 100%;
      object-fit: contain;
  }

  ul {
    list-style: none;
    padding: 0;
      margin: 0;
  }

  button {
    font-family: inherit;
    cursor: pointer;  
      border: none;
      padding: 0;
  }
  
  a{
      text-decoration: none;
  }
`;
