import styled from 'styled-components';

export const VocabListWrapper = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  line-height: 30px;
  margin-top: 0px;
  height: 54vh;
  overflow-y: scroll;
  .card-list-item {
    font-size: 0.8em;
  }

  .hide {
    display: none;
  }
`;

export const DeleteButton = styled.div`
  float: right;
  cursor: pointer;
`;
