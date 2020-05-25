import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 0 1 60px;
  background: #0078d7;
  width: 100%;
  z-index: 555;
  vertical-align: middle;
  justify-content: space-between;
  border-bottom: #004b86;

  button {
    color: #107bbd;
    margin-top: 10px;
    height: 40px;
    margin-right: 5vw;
    width: 80px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #107bbd;
    outline: none;
    cursor: pointer;
  }

  .title {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 18px;
    align-items: center;
    color: white;
    display: flex;
    font-size: 30px;
    line-height: 60px;
    height: 60px;
    letter-spacing: 5px;

    .logo {
      width: 30px;
      margin-right: 15px;
      @media screen and (max-width: 800px) {
        margin-left: 45px;
      }
    }
  }
`;
