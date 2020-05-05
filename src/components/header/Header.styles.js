import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: relative;
  flex: 0 1 60px;
  background: #0078d7;
  width: 100%;
  z-index: 555;

  .header-content {
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    justify-content: space-between;
    padding: 0px;
  }

  button {
    color: #107bbd;
    margin-top: 10px;
    height: 40px;
    width: 80px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #107bbd;
    outline: none;
    cursor: pointer;
  }

  .logout-button {
    line-height: 60px;
    cursor: pointer;
    color: white;
    border-left: 1px solid white;
    border-right: 1px solid white;
    width: 100px;
    text-align: center;
  }

  .title {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 10px;
    align-items: center;
    color: white;
    display: flex;
    font-size: 30px;
    line-height: 60px;
    height: 60px;
    letter-spacing: 5px;

    .logo {
      width: 40px;
      margin-right: 20px;
    }
  }
`;
