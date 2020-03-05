import styled from 'styled-components';

export const AddNewCardWrapper = styled.div`
  .add-new-card {
    display: flex;
    position: relative;
    flex-direction: row;
    height: 50px;
    text-align: center;
    line-height: 50px;
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
      margin-right: 10px;
      background: lightgreen;
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
    left: calc(50% - 28px);
    top: 10px;
    border: 1px solid #107bbd;
    line-height: 30px;
    color: white;
    background: #107bbd;
    cursor: pointer
    transform: translateX(-50%);
  }
`;
