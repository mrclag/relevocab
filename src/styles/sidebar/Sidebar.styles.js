import styled from 'styled-components';

export const SideBarWrapper = styled.div`
  width: 300px;
  position: absolute;
  top: 0;
  height: 100vh;
  background-color: #f4f8fb;
  border-right: 1px solid black;
  z-index: 3;
  hr {
    margin: 0;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 30px;
  align-items: center;
  color: #107bbd;
  display: flex;
  height: 8vh;
  letter-spacing: 9px;
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
      padding-left: 30px;
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
`;

export const DeckItems = styled.div``;
