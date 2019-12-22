import styled from 'styled-components';

export const VocabListWrapper = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  line-height: 30px;
  margin-top: 0px;
  font-size: 0.8em;
  height: 54vh;
  overflow-y: scroll;
  .li {
    list-style-type: none;
  }
  h3 {
    text-align: 'center';
  }
  .hide {
    display: none;
  }
`;

export const DeleteButton = styled.div`
  float: right;
  cursor: pointer;
`;
