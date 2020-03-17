import styled from 'styled-components';

export const AddNewCardWrapper = styled.div`
  .add-new-card {
    display: flex;
    position: relative;
    flex-direction: row;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: white;
    vertical-align: middle;
    .cardlistitem {
      border: 1px solid #eee;
      width: 50%;
      input {
        border: none;
        text-align: center;
        outline: none;
        width: 100%;
      }
    }
    .addbutton {
      border: none;
      width: 50px;
      background: #306B34;
      color: white;
      cursor: pointer;
      @media screen and (max-width: 800px){
        width: 50px;
      }
    }
  }
  .translate-input {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    left: calc(50% - 23px);
    top: 10px;
    border: 1px solid #107bbd;
    line-height: 30px;
    color: white;
    background: #107bbd;
    cursor: pointer
    transform: translateX(-50%);
  }
`;
