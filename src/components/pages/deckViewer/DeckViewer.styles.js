import styled from 'styled-components';

export const DeckViewWrapper = styled.div`
  width: 100%;
  .deck-page {
    display: flex;
    flex-direction: row;
    height: 100%;
    @media screen and (max-width: 800px){
      flex-direction: column;
    }
    .right-bar{
      width: 300px;
      min-width: 300px !important;
      background-color: white;
      display: flex;
      flex-direction: column;
      border-left: 1px solid #eee;
      align-items: center;
      padding-top: 50px;
      @media screen and (max-width: 800px){
        display: none;
      }
      
    }
    .main-content {
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      position: relative;

      .language-selects{
        /* display: flex; */
        display: none;
        flex-direction: row;
        > * {
          width: calc(50% - 30px);
        }
      }

      .cards-list{
        max-height: calc(100vh - 120px);
        overflow-y: overlay;
        overflow-x: hide;
        @media screen and (max-width: 800px){
          max-height: calc(100vh - 240.5px);
        }
      }
      .newcard {
        height: 60px;
      }
      
    }

    .top {
      display: none;
      flex-direction: row;
      background: white;
      height: 100px;
      border-bottom: 0.5px solid #ccc;
      text-align: center;
      padding: 40px 100px;
      align-items: center;
      justify-content: center;
      &-left {
        width: 120px;
        padding-top: 20px;
        align-items: center;
      }

      @media screen and (max-width: 800px) {
        padding: 10px 40px;
        display: flex;
        justify-content: space-between;
      }
    }

    .deck-picture {
        width: 120px;
        height: 120px;
        @media screen and (max-width: 800px){
          width: 50px;
          height: 50px;
        }
      }
      .deck-info {
        display: block;
        margin-bottom: 20px;
        text-align: center;
        margin-top: 15px;
        &-title {
          font-size: 20px;
          font-weight: bold;
          @media screen and (max-width: 800px){
            font-size: 18px;
          }
        }
        @media screen and (max-width: 800px){
          margin-top: 0px
        }
      }
      .deck-buttons {
        display: flex;
        flex-direction: column
        margin: 5px;

        .button {
          font-size: 16px;
          width: 120px;
          height: 35px;
          border: none;
          color: white;
          &-practice {
            background: #306B34;
            margin-bottom: 10px;
          }
          &-delete {
            background: #C44536;
          }
        }
      }
  }

  @media screen and (max-width: 800px){
    margin-left: 0px
    width: 100%;
  }

  .choose-deck {
    font-size: 40px;
    margin-left: 10px;
    margin-top: 10px;
    padding: 20px;
    width: 800px;
    background: white;
    border: 0.5px solid #ccc;
    border-radius: 5px;
    @media screen and (max-width: 800px){
      width: calc(100vw - 41px);
      margin-left: 0;
      margin-top: 0;
    }
  }
`;
