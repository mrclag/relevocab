import styled from 'styled-components';

export const CardListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  background: white;
  border-bottom: 1px solid #eee;
  border: 0.5px solid #aaa;
  line-height: 50px;
  border-radius: 5px;
  margin: 5px;
  @media screen and (max-width: 800px){
    font-size: 12px;
  }

  .cardlistitem {
    line-height: ${(props) => (props.cardlength > 37 ? '20px' : '50px')}
    padding-top: ${(props) => (props.cardlength > 37 ? '5px' : '0px')};
    padding-left: 5px;
    padding-right: 5px;
    width: calc(50% - 37px);
    border-right: 1px solid #eee;
    @media screen and (max-width: 1150px){
      line-height: ${(props) => (props.cardlength > 33 ? '20px' : '50px')}
      padding-top: ${(props) => (props.cardlength > 33 ? '5px' : '0px')};
    }
    @media screen and (max-width: 800px){
      line-height: ${(props) => (props.cardlength > 27 ? '20px' : '50px')}
      padding-top: ${(props) => (props.cardlength > 27 ? '5px' : '0px')};
    }
  }
  .deletebutton {
    position: relative;
    border: none;
    width: 50px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    .trash {
      width: 20px;
      height: 20px;
      transform: translateY(5px);
      color=${(props) => (props.disabled ? '#c48a84' : '#C44536')}
    }
    .disabled {
      font-size: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      text-align: center;
    }
  }
`;
