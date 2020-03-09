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
      border-left: 1px solid black;
      align-items: center;
      padding-top: 50px;
      @media screen and (min-width: 800px){}
      
    }
    .main-content {
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;

      .language-selects{
        display: flex;
        flex-direction: row;
        > * {
          width: calc(50% - 30px);
        }
      }

      .cards-list{
        max-height: 80vh;
        overflow-y: scroll;
        overflow-x: hide;
      }
    }

    .top {
      display: none;
      flex-direction: row;
      height: 100px;
      border-bottom: 0.5px solid #333;
      margin-bottom: 10px;
      text-align: center;
      padding: 40px 100px;
      align-items: center;
      justify-content: space-between;

      @media screen and (max-width: 800px) {
        padding: 10px 25px;
        display: flex;
      }
    }

    .deck-picture {
        width: 80px;
        height: 80px;
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
    margin-top: 20px;
    width: 100%;
  }

  .choose-deck {
    font-size: 40px;
    margin-left: 50px;
    margin-top: 20px;
  }
`;
