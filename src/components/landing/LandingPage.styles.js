import styled from 'styled-components';

export const LandingPageWrapper = styled.div`
  width: 100vw;
  display: flex;
  position: relative;
  justify-content: center;
  background-color: #2a416f;
  @media screen and (max-width: 800px){
    overflow-y: scroll;
  }

  .header {
    height: 60px;
    position: fixed;
    display: flex;
    flex-direction: row;
    color: white;
    font-size: 24px;
    line-height: 60px;
    width: 100%;
  
    &-logo {
      margin-top: 10px
      margin-right: 15px;
      height: 40px;
    }

    &-title {
      height: 60px;
      width: 150px;
      @media screen and (max-width: 800px) {
        display: none;
      }
    }
  }

  .content-box {
    width: 60vw;
    height: 100vh;
    /* height: 80vh */
    @media screen and (max-width: 1300px) {
      width: 70vw;
    }

    @media screen and (max-width: 800px) {
      width: 80vw;
    }

    .landing-content {
      height: 100vh;
      display: flex;
      flex-direction: row;
      align-items: center;
      transform: translateY(-7%);
      @media screen and (max-width: 800px) {
        padding-top: 13vh;
      }

      &-text {
        width: 50%;
        color: white;
        margin-right: 30px;
        @media screen and (max-width: 800px) {
          width: unset;
          display: ${(props) => (props.loginVisibility ? 'none' : 'unset')};
        }

        .heading {
          margin-bottom: 30px;
          font-size: 30px;
        }

        .description {
          font-size: 45px;
          margin-bottom: 40px;
          &-text {
            font-size: 24px;
          }
          @media screen and (max-width: 800px) {
            font-size: 35px;
            &-text {
              font-size: 25px;
            }
          }
        }

        .button-signup {
          border: none;
          border-radius: 5%;
          color: #333;
          height: 50px;
          margin-bottom: 80px;
          margin-top: 80px;
          background-color: white;
          padding: 8px 20px;
          @media screen and (min-width: 1115px) {
            display: none;
          }
        }
      }
      &-login {
        width: 50%;
        @media screen and (max-width: 800px) {
          display: ${(props) => (props.loginVisibility ? 'flex' : 'none')};
          width: 100%;
        }
        img {
          position: absolute;
          height: 400px;
          width: 400px;
          margin: auto;
        }

        .auth-wrapper {
          background: #fff;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 10px 0 -5px #eee,
            0 10px 1px -4px rgba(0, 0, 0, 0.15), 0 20px 0 -10px #eee,
            0 20px 1px -9px rgba(0, 0, 0, 0.15);
          width: 300px;
          padding-left: 30px;
          padding-right: 30px;
          padding-top: 30px;
          border: 1px solid white;
          height: 400px;
          margin: auto;
          text-align: center;

          .close {
            display: none;
            @media screen and (max-width: 800px){
              display: unset;
              float: right;
              cursor: pointer;
              font-size: 16px;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
`;
