import styled from 'styled-components';

export const CardListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  height: 50px;
  text-align: center;
  line-height: ${props => (props.cardlength > 40 ? '25px' : '50px')}
  vertical-align: middle;
  background: white;
  border-bottom: 1px solid #eee;

  .cardlistitem {
    width: 50%;
    border-right: 1px solid #eee;
  }
  .deletebutton {
    border: none;
    width: 50px;
    cursor: pointer;
    .trash {
      width: 20px;
      height: 20px;
      transform: translateY(5px);
    }
  }
`;
