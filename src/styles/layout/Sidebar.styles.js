import styled from 'styled-components';

export const SideBarWrapper = styled.div`
  width: 300px;
  position: absolute;
  top: 0;
  height: 100vh;
  background-color: #eee;
  border-right: 1px solid black;
  z-index: 3;
  .selectMenu {
    width: 250px;
    padding-left: 30px;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 30px;
  align-items: center;
  color: black;
  display: flex;
  height: 70px;
  background: linear-gradient(
    62deg,
    rgba(230, 228, 255, 1) 0%,
    rgba(151, 167, 255, 1) 98%
  );
`;

export const NavLinks = styled.div`
  padding-left: 30px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  padding-right: 70px;
  color: black;
  .link {
    text-decoration: none;
  }
`;
