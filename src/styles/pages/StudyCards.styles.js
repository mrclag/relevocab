import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 200px;
  left: 40%;

  .deckend-text {
    color: #c57b57;
  }
  .counter {
    font-size: 1.15em;
  }
  @media screen and (max-width: 800px) {
    left: 5vw;
  }
`;

export const CardButton = styled.button`
  height: 50px;
  width: 75px;
  background-color: ${props => props.color};
  border: none;
  color: white;
  margin: 10px;
`;
