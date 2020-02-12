import styled from 'styled-components';

export const SideBarWrapper = styled.div`
  width: 300px;
  position: absolute;
  top: 70px;
  height: calc(100%);
  background-color: #f4f4f4;
  border-right: 0.5px solid #9c9c9c;
  z-index: 3;
  hr {
    margin: 0;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  .link {
    text-decoration: none;
    color: black;
  }
  .nav-link {
    text-decoration: none;
    font-weight: bold;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33.34%;
  }
`;

export const DeckWrapper = styled.div`
  height: 18vh;
  .deck-header {
    display: flex;
    flex-direction: row;
    height: 5vh;
    align-items: center;
    & h4 {
      padding-left: 20px;
    }
    & button {
      height: 20px;
      width: 80px;
      border-radius: 5px;
      border: 1px solid #107bbd;
      background: white;
      color: #107bbd;
      text-align: center;
      margin-left: 140px;
      &:focus {
        outline: 0;
      }
      .deck-add {
        margin-top: -1px;
        font-size: 0.8em;
        margin-left: -1px;
      }
    }
  }
  .deck-items {
    display: flex;
    overflow-y: overlay scroll;
    overflow-x: hidden;
    height: 13vh;
    .deck-item {
      cursor: pointer;
    }
  }

  .comment-form {
    & input {
      width: calc(100%-45px);
      border: none;

      line-height: 30px;
      margin-top: 0px;
      font-size: 0.8em;
      background: #f4f4f4;
      margin-left: 10px;
      outline: none;
    }
    & .add-button {
      margin-left: 20px;
    }
  }
`;

export const DeckItems = styled.div``;
