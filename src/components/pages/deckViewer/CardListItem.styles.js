
import styled from 'styled-components';

export const CardListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  vertical-align: middle;
  border-bottom: 1px solid #eee;

  .cardlistitem {
    width: 50%;
    border-right: 1px solid #eee;
  }
  .deletebutton {
    border: none;
    width: 50px;
    background: pink;
    cursor: pointer;
    .trash {
      width: 20px;
      height: 20px;
      transform: translateY(5px);
    }
  }
`;