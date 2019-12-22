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
  background: linear-gradient(
    62deg,
    rgba(230, 228, 255, 1) 0%,
    rgba(210, 220, 255, 1) 98%
  );
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  .link {
    text-decoration: none;
    color: black;
  }
`;

export const DeckHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: 'space-between';
  & h4 {
    padding-left: 30px;
    margin-bottom: 10px;
  }
  & button {
    height: 25px;
    width: 25px;
    margin: auto 0;
    margin-left: 175px;
    border-radius: 5px;
    border: 1px solid #107bbd;
    background: white;
    color: #107bbd;
  }
`;

export const DeckItems = styled.div`
  display: flex;
  overflow-y: overlay scroll;
  overflow-x: hidden;
  height: 12vh;
`;
