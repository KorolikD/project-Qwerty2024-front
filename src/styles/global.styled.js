import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fonts.mainFont};
    background-color: ${({ theme }) => theme.colors.black};
    
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  button {
    font-size: inherit;
  }
`;