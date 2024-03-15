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
  .ant-input-outlined.ant-input-status-error:not(.ant-input-disabled) {
	    background: transparent;
	    border-width: 1px;	  
      border-style: solid;
	   border-color: #ff4d4f;
}


.ant-input-affix-wrapper >input.ant-input {
  &::placeholder{
color: ${(props) => props.theme.colors.grey} !important;
}
}

.ant-form-item-explain-success {
  color: green;
}

.ant-input-affix-wrapper .anticon.ant-input-password-icon {
    color: ${(props) => props.theme.colors.grey} !important ;
    
}
.ant-input-status-success {
 border-color: green !important;
}

.ant-input-outlined:focus-within{
  background-color: transparent !important;
}

/* .ant-input-outlined.ant-input-status-error:not(.ant-input-disabled) {
    background: #ffffff;
   
} */

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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
  margin: 0;
  }
`;
