import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Cairo', sans-serif;
    margin: 0;
    height: 100%;
  }
  
  &::-webkit-scrollbar {
  width: 10px;
  background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #afc9e9;
  }

  ::-webkit-scrollbar-corner {
  background: transparent;
}

`;
