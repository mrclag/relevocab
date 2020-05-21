import styled from 'styled-components';

export const LyricsPageWrapper = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  background: white;
  border: 1px solid #aaa;
  border-radius: 5px;
  padding: 20px;

  .search-form {
    &-input {
      height: 40px;
      width: 500px;
    }

    &-submit {
      color: #107bbd;
      margin-left: 10px;
      margin-top: 5px;
      height: 42px;
      width: 100px;
      background-color: white;
      border-radius: 5px;
      border: 1px solid #107bbd;
      outline: none;
      cursor: pointer;
    }
  }

  .results-count {
    margin-top: 5px;
    margin-bottom: 10px;
    font-style: italic;
  }
  .results-songs {
    max-height: 70vh;
    overflow-y: scroll;
  }

  @media screen and (max-width: 800px) {
    margin-left: 0px;
    .search-form {
      &-input {
        width: 70vw;
        border: 1px solid #333;
        margin-top: 40px;
        padding-left: 15px;
      }
      &-submit {
        @media screen and (max-width: 800px) {
          width: 25vw;
          margin-left: 0px;
        }
      }
    }
  }
`;
