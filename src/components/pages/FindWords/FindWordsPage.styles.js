import styled from 'styled-components';

export const FindWordsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 10px;
  .top {
    width: 850px;
    .search {
      background: white;
      border: 0.5px solid #ccc;
      border-radius: 5px;
      padding: 20px;
    }
    @media screen and (max-width: 800px) {
      margin-left: 0px;
      padding: unset;
      width: unset;
      border-bottom: 1px solid #ccc;
    }

    h3 {
      font-size: 16px;
      @media screen and (max-width: 800px) {
        margin-left: 10vw;
      }
    }
    #submit-button {
      color: #107bbd;
      margin-left: 10px;
      margin-top: 5px;
      height: 42px;
      width: 50px;
      background-color: white;
      border-radius: 5px;
      border: 1px solid #107bbd;
      outline: none;
      cursor: pointer;
      @media screen and (max-width: 800px) {
        width: 50px;
        height: 30px;
      }
    }
    input {
      height: 40px;
      width: 300px;
      padding-left: 20px;
      @media screen and (max-width: 800px) {
        height: 25px;
        border: 1px solid #aaa;
        width: 60vw;
      }
    }
  }

  .results {
    max-height: calc(100vh - 150px);
    margin-top: 10px;
    width: 850px;
    display: flex;
    flex-direction: row;

    &-title {
      margin-bottom: 0px;
    }
    &-url {
      margin-bottom: 2vh;
      text-decoration: none;
      color: black;
      a {
        text-decoration: none;
        color: black;
      }
    }

    &-words {
      max-height: calc(100vh - 145px);
      overflow: scroll;
      width: 425px;
    }
  }
  .moreWords {
    max-height: calc(100vh - 145px);
    padding-left: 10px;
    padding-right: 10px;
    width: 425px;
    overflow: scroll;
  }

  @media screen and (max-width: 800px) {
    margin-left: 0px;
    margin-top: 0px;
    width: 100vw;
    #submit-button {
      @media screen and (max-width: 800px) {
        width: 25vw;
        margin-left: 0px;
      }
    }
    .results-words {
      width: 100vw;
    }
  }
`;
