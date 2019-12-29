import styled from 'styled-components';

export const VocabListWrapper = styled.div`
  padding-left: 30px;
  margin-top: 0px;
  height: 50vh;
  .card-list-item {
    font-size: 0.8em;
    padding-right: 30px;
    line-height: 30px;
  }
  .cards-title {
    display: flex;
    align-items: center;
    height: 5vh;
  }
  .hide {
    display: none;
  }
`;

export const DeleteButton = styled.div`
  float: right;
  cursor: pointer;
`;
