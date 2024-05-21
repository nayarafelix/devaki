import { createGlobalStyle } from 'styled-components';
import '@fontsource/montserrat';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    position: relative;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
