import styled from 'styled-components';

export const SideBarWrapper = styled.div`
  display: ${(props) => (props.sidebarVis ? 'unset' : 'none')};
  width: 300px;
  position: static;
  z-index: 999;
  @media screen and (min-width: 800px) {
    display: unset !important;
  }
  hr {
    margin: 0;
  }
  .header {
    position: relative;
    display: flex;
    border-bottom: 1px solid white;
    flex-direction: row;
    flex: 0 1 60px;
    width: 100%;
    z-index: 555;
    vertical-align: middle;
    justify-content: space-between;

    .signout {
      margin-right: 20px;
      margin-top: 15px;
      height: 30px;
      width: 30px;
      outline: none;
      cursor: pointer;
    }
    .title {
      margin-top: 0;
      margin-bottom: 0;
      padding-left: 10px;
      align-items: center;
      color: #515151;
      display: flex;
      font-size: 30px;
      line-height: 60px;
      height: 60px;
      letter-spacing: 5px;

      .logo {
        width: 150px;
        margin-right: 10px;
        margin-left: 60px;
      }
    }
  }
`;

export const SidebarTopWrapper = styled.div`
  overflow: hidden;
  border-right: 0.5px solid #aaa;
  height: calc(100vh - 60px);
  /* background-color: #2a416f; */
  background-color: #f7f7f7;

  min-width: ${(props) => (props.sidebarVis ? '300px' : 'unset')};
  @media screen and (max-width: 800px) {
    position: absolute;
    z-index: 999;
  }
`;

export const Hamburger = styled.div`
  position: absolute;
  z-index: 999;
  -webkit-transform: translate3d(0, 0, 200px);
  line-height: 30px;
  margin-top: -60px;
  height: 30px;
  padding-left: 20px;
  font-weight: bold;
  font-size: 1.5em;
  background: transparent;
  padding-top: 10px;
  padding-bottom: 10px;
  display: none;
  img {
    padding-top: 5px;
    height: 25px;
    width: 25px;
    cursor: pointer;
  }
  @media screen and (max-width: 800px) {
    position: fixed;
    display: unset;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 180px;
  .link {
    text-decoration: none;
    color: black;
  }
  .nav-link {
    text-decoration: none;
    height: 40px;
    margin: auto 0;
    font-size: 16px;
    vertical-align: middle;
    line-height: 40px;
    width: calc(100%-20px);
    padding-left: 20px;
  }
  .icon {
    height: 15px;
    width: 15px;
    margin-right: 10px;
    transform: translate(1.5px, 1.5px);
  }
`;

export const DeckWrapper = styled.div`
  height: 50vh;
  .deck-header {
    display: flex;
    flex-direction: row;
    height: 50px;
    align-items: center;
    padding-left: 20px;
    color: #515151;
  }
  .deck-items {
    display: flex;
    overflow-y: overlay scroll;
    overflow-x: hidden;
    max-height: calc(100vh - 370px);
    .deck-item {
      cursor: pointer;
      text-decoration: none;
    }
    @media screen and (max-width: 800px) {
      max-height: calc(100vh - 400px);
    }
  }

  .comment-form {
    height: 40px;
    & input {
      width: calc(100%-45px);
      border: none;
      line-height: 30px;
      caret-color: #515151;
      margin-top: 5px;
      font-size: 0.8em;
      background: #f7f7f7;
      margin-left: 14px;
      color: #333;
      outline: none;
      ::placeholder {
        color: #515151;
      }
    }
    & .add-button {
      margin-left: 20px;
      img {
        width: 14px;
        height: 14px;
        transform: translate(1.5px, 1.5px);
      }
    }
  }
`;

export const DeckItems = styled.div``;
