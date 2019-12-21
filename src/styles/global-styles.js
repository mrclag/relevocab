import styled, { createGlobalStyle } from 'styled-components';

export const AddButton = styled.div`
  height: 20px;
  width: 20px;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  border-radius: 50%;
  background-color: green;
  margin: 5px;
  cursor: pointer;
`;
export const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    overflow-y: hidden;
  }
`;
