import React from 'react';
import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  body {
    margin: 0;
    word-wrap: break-word;
    font-family: "Cabana";
    font-size: 2rem;
    text-rendering: optimizeLegibility;
    letter-spacing: 0.1rem;
    color: #3c3c3c;
    background: #f8f6f9;
  }
  h1 {
    margin-bottom: 1.45rem;
    color: #945d60;
    font-weight: bold;
    font-size: 4.25rem;
    line-height: 1.1;
  }
  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
`;

const GlobalStyles = () => {
  return <Globals />;
};

export default GlobalStyles;
