import styled from 'styled-components';

export const LyricsPageWrapper = styled.div`
  margin-left: 10px;
  margin-top: 10px;

  .top {
    width: 850px;
    .search {
      background: white;
      border: 0.5px solid #ccc;
      border-radius: 5px;
      padding: 20px;
      @media screen and (max-width: 800px) {
      }
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
        border: 1px solid #333;
        width: 60vw;
      }
    }
  }

  .results-wrapper {
    border: 0.5px solid #ccc;
    padding: 20px;
    background: white;
    border-radius: 5px;
    margin-top: 10px;
  }

  .results-count {
    margin-bottom: 5px;
    font-style: italic;
  }
  .results-songs {
    max-height: calc(100vh - 245px);
    overflow-y: scroll;
  }

  @media screen and (max-width: 800px) {
    margin-left: 0px;
    margin-top: 0px;
    width: 100%;
    .search-form {
      &-input {
        width: 70vw;
        border: 1px solid #333;
        padding-left: 15px;
      }
      &-submit {
        @media screen and (max-width: 800px) {
          width: 25vw;
          margin-left: 0px;
        }
      }
    }
    .results-songs {
      max-height: calc(100vh - 200px);
      overflow-y: scroll;
    }
  }
`;
