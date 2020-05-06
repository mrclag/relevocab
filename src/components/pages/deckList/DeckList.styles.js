import styled from 'styled-components';

export const DeckListWrapper = styled.div`
  background: white;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: row;
  padding: 0px;

  a:hover,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
  }

  .left-bar {
    flex: 2 0px;
    border: 1px solid #e7e7e7;
    order: 1;
    flex-direction: column;
    @media (max-width: 800px) {
      display: none;
    }

    .collections-title {
      height: 50px;
      margin-top: 20px;
      padding-left: 20px;
      font-weight: bold;
      border-bottom: 0.5px solid #e7e7e7;
      line-height: 50px;
    }

    .collection {
      height: 50px;
      padding-left: 30px;
      font-size: 14px;
      border-bottom: 0.5px solid #e7e7e7;
      line-height: 50px;
      cursor: pointer;
      &:hover {
        background: lightblue;
        color: white;
      }
    }
  }

  .right-bar {
    flex: 3 0px;
    border: 1px solid #e7e7e7;
    order: 3;
    flex-direction: column;
    @media (max-width: 800px) {
      display: none;
    }

    .add-deck {
      border: 0.5px solid #e7e7e7;
      background: #f9f9f9;
      width: 300px;
      height: 200px;
      margin: auto;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .image-upload {
        width: 100px;
        height: 100px;
        border: 0.5px solid #e7e7e7;
        margin-top: 10px;
      }
      .deck-name-input {
        width: 80%;
        margin-top: 10px;
        font-size: 14px;
        padding-left: 5px;
        border: 0.5px solid #e7e7e7;
      }
      .upload-button {
        width: 40%;
        margin-top: 10px;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        border: none;
        background: lightblue;
      }
    }
    .recommended-title {
      height: 40px;
      margin-top: 10px;
      padding-left: 20px;
      font-weight: bold;
      border-bottom: 0.5px solid #e7e7e7;
      line-height: 50px;
    }
  }

  .middle {
    flex: 5 0px;
    border: 1px solid #e7e7e7;
    order: 2;
    flex-direction: column;

    .decks-title {
      height: 50px;
      margin-top: 20px;
      padding-left: 20px;
      font-weight: bold;
      border-bottom: 0.5px solid #e7e7e7;
      line-height: 50px;
    }

    .deck {
      height: 75px;
      border-bottom: 0.5px solid #e7e7e7;
      line-height: 75px;
    }
  }
`;
