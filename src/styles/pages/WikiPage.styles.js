import styled from 'styled-components';

export const WikiPageWrapper = styled.div`
  display: flex;
  margin-left: 400px;
  #submit-button {
    color: #107bbd;
    margin-left: 10px;
    margin-top: 5px;
    height: 25px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #107bbd;
    outline: none;
    cursor: pointer;
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
      width: 350px;
    }
  }
  .moreWords {
    margin-top: 20vh;
    margin-left: 6vw;
    height: 75vh;
    border: 2px solid #97c3e9;
    padding-left: 10px;
    padding-right: 10px;
    width: 230px;
    overflow: scroll;
  }
`;
