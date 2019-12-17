import styled from 'styled-components';

export const SideBarWrapper = styled.div`
  width: 300px;
  position: absolute;
  top: 0;
  height: 100vh;
  background-color: #eee;
  border-right: 1px solid black;
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 30px;
  align-items: center;
  display: flex;
  height: 70px;
  background-color: lightblue;
`;

export const NavLinks = styled.div`
  padding-left: 30px;
  display: flex;
  justify-content: space-between;
  padding-right: 70px;
  color: black;
  .link {
    text-decoration: none;
  }
`;
