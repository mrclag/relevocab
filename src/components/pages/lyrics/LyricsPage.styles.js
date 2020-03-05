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

    &-result {
      min-height: 100px;
      /* border: 0.5px solid blue; */
      border-bottom: 0.5px solid black;
      margin-bottom: 10px;
    }
    &-output {
      font-size: 12px;
      margin-bottom: 20px;
      margin-top: 20px;
    }
    &-title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    &-artist {
      font-size: 14px;
      font-style: italic;
      margin-bottom: 10px;
    }
    &-cards {
      color: darkblue;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 600px;
      .card {
        border: 0.5px solid darkblue;
        margin-right: 3px;
        margin-bottom: 3px;
        padding: 3px 10px;
        font-size: 0.8em;
      }
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
