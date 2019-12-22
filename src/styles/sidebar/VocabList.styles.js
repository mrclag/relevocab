import styled from 'styled-components';

export const VocabListWrapper = styled.div`
  padding-left: 30px;
  margin-top: 0px;
  max-height: 56vh;
  .card-list-item {
    font-size: 0.8em;
    padding-right: 30px;
    line-height: 30px;
  }
  .cards-title {
    display: flex;
    height: 5vh;
    padding-bottom: 10px;
  }
  .hide {
    display: none;
  }
`;

export const DeleteButton = styled.div`
  float: right;
  cursor: pointer;
`;
