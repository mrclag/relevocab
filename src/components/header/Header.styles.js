import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: relative;
  flex: 0 1 50px;
  /* background: #0078d7; */
  background: #4f4969;
  width: 100%;
  z-index: 555;

  .header-content {
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    justify-content: space-between;
    padding: 0px;
  }

  .nav-button {
    line-height: 50px;
    cursor: pointer;
    color: white;
    border-left: 1px solid black;
    border-right: 1px solid black;
    width: 100px;
    text-align: center;
    font-size: 14px;
    letter-spacing: 0px;
  }

  /* .logout-button {
    line-height: 50px;
    cursor: pointer;
    color: white;
    border-left: 1px solid black;
    border-right: 1px solid black;
    width: 100px;
    text-align: center;
  } */

  .title {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 10px;
    align-items: center;
    color: white;
    display: flex;

    .logo {
      width: 30px;
      margin-right: 20px;
    }
    .app-title {
      line-height: 50px;
      height: 50px;
      letter-spacing: 5px;
      font-size: 20px;
      padding-right: 15px;
      border-right: 1px solid black;
    }
  }
`;
