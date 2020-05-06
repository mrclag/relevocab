import styled from 'styled-components';

export const DeckViewWrapper = styled.div`
  background: white;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: row;
  padding: 0px;

  .left {
    flex: 2 0px;
    border: 1px solid #aaa;
  }
  
  .right {
    flex: 1 0px;
    border: 1px solid #aaa;
  }
`;
