import styled from 'styled-components';

export const WikiPageWrapper = styled.div`
  display: flex;
  margin-left: 350px;
  #submit-button {
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
  input {
    height: 40px;
    width: 500px;
  }
  .results {
    margin-top: 3vh;

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
      max-height: 75vh;
      overflow: scroll;
      width: 440px;
      .search-moreWords {
        height: 40px;
        line-height: 40px;
        color: white;
        box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.1);
        border-radius: 0px 7px 7px 0px;
        margin-top: 5px;
        margin-bottom: 5px;
        transform: translateX(-5px);
        text-align: center;
        cursor: pointer;
        background: #107bbd;
        width: 20px;
        @media screen and (max-width: 800px) {
          width: 30px;
        }
      }
    }
  }
  .moreWords {
    height: 75vh;

    border: 1px solid #97c3e9;
    padding-left: 10px;
    padding-right: 10px;
    width: 420px;
    overflow: scroll;
  }
  .both-results {
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 800px) {
    margin-left: 0px;
    input {
      width: 70vw;
      border: 1px solid #333;
      margin-top: 40px;
      padding-left: 15px;
    }
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
