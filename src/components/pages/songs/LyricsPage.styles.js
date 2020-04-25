import styled from 'styled-components';

export const LyricsPageWrapper = styled.div`
  margin-left: 50px;

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

  .results {
    width: 100%;
    height: 75vh;
    margin-top: 20px;
    overflow-y: scroll;

    &-output {
      margin-top: 5px;
      margin-bottom: 10px;
      font-style: italic;
    }
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
