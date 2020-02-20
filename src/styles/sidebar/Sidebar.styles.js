import styled from 'styled-components';

export const SideBarWrapper = styled.div`
  display: ${props => (props.sidebarVis ? 'unset' : 'none')}
  width: 300px;
  position: absolute;
  top: 70px;
  height: 100vh;
  background-color: #f4f4f4;
  overflow: hidden;
  border-right: 0.5px solid #9c9c9c;
  z-index: 3;
  hr {
    margin: 0;
  }
`;

export const Hamburger = styled.div`
  position: absolute;
  top: 70px;
  z-index: 999;
  line-height: 30px;
  height: 30px;
  padding-left: 20px;
  font-weight: bold;
  font-size: 1.5em;
  background: transparent;
  padding-top: 10px;
  padding-bottom: 10px;
  img {
    height: 30px;
    width: 30px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  margin-top: 50px;
  margin-bottom: 10px;
  .link {
    text-decoration: none;
    color: black;
  }
  .nav-link {
    text-decoration: none;
    height: 30px;
    margin: auto 0;
    vertical-align: middle;
    line-height: 30px;
    width: calc(100%-20px);
    padding-left: 20px;
  }
  img {
    height: 15px;
    width: 15px;
    margin-right: 10px;
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
      text-decoration: none;
    }
  }

  .comment-form {
    & input {
      width: calc(100%-45px);
      border: none;

      line-height: 20px;
      margin-top: 5px;
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
