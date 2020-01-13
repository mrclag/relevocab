import styled, { createGlobalStyle } from 'styled-components';

export const AddButton = styled.div`
  height: 15px;
  width: 15px;
  text-align: center;
  border: ${props =>
    props.selectedWord ? '1px solid white' : '1px solid #107bbd'};
  border-radius: 15%;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    font-family: 'Cairo', sans-serif;
    margin: 0;
    overflow-y: hidden;
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

`;
