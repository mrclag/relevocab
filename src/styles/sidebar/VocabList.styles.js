import styled from 'styled-components';

export const VocabListWrapper = styled.div`
  padding-left: 20px;
  margin-top: 0px;
  height: 40vh;
  .cards-title {
    display: flex;
    align-items: center;
    height: 5vh;
  }
  .cards-list-wrapper {
    margin-left: 10px;
    height: 35vh;
    overflow-y: overlay scroll;
    overflow-x: hidden;
  }
  .card-list-item {
    font-size: 0.8em;
    padding-right: 30px;
    line-height: 30px;
    &-front {
      cursor: pointer;
      margin-right: 20px;
    }
  }
  .hide {
    display: none;
  }
`;

export const DeleteButton = styled.div`
  float: right;
  cursor: pointer;
`;
