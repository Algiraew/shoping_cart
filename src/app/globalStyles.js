import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
  `;

export default GlobalStyle;
