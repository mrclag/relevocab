import styled from 'styled-components';

export const LandingPageWrapper = styled.div`
  width: 100vw;
  display: flex;
  position: relative;
  justify-content: center;
  background-color: #fff;

  .header {
    height: 60px;
    position: fixed;
    color: white;
    background: #333;
    font-size: 24px;
    line-height: 60px;
    z-index: 999;
    width: 100vw;
    display: flex;
    justify-content: center;

    &-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 80vw;
      
    }

    &-logo {
      margin-top: 10px
      margin-right: 15px;
      height: 40px;
    }

    &-title {
      margin: auto;
      height: 60px;
      line-height: 60px;
      width: 150px;
      @media screen and (max-width: 800px) {
        display: none;
      }
    }
  }

  .background-img{
    width: 100%;
    position: absolute;
  }

  .mockup {
    width: 60vw;
    height: auto;
    display: flex;
    margin: auto;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    @media screen and (max-width: 800px){
      width: 95vw;
      margin-top: 150px;
    }
  }

  .features-section {
    width: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
    background: #e7e7e7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &-title {
      margin: auto;
      margin-bottom: 10px;
      font-size: 30px;
      font-weight: bold;
      color: #333;
      width: unset;
    }
    .features-container {
      width: 70vw;
      margin: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;

    }
    .feature {
      margin: 10px;
      height: 250px;
      width: 220px;
      background: white;
      border: 1px solid #ddd;
      padding: 15px;
      padding-top: 30px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 5px 0 -5px #eee;
      &-head {
        font-size: 1.2em;
        color: #0078d7;
        margin-bottom: 10px;
      }
      &-title {
        font-size: 1.4em
        font-weight: bold;
        color: #333;
        margin-bottom: 10px;
      }
      &-description {
        font-size: 1em;
        color: #333
        margin-bottom: 15px;
      }
      &-learn {
        cursor: pointer;
        color: #0078d7;
        font-weight: bold;
        font-size: 1em;
      }

    }
  }
  .more-info {
    height: 400px;
    width: 100vw;
    background: white;
  }
  .footer {
    height: 60px;
    width: 100vw;
    background: #333;
    text-align: center;
    padding-top: 30px;
    color: white;
  }

  .content-box {
    width: 60vw;
    height: 70vh;
    margin: auto;
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
        color: #333;
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
          margin-top: 50px;
          background-color: lightblue;
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

        .auth-wrapper {
          background: #fff;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 10px 0 -5px #eee,
            0 10px 1px -4px rgba(0, 0, 0, 0.15), 0 20px 0 -10px #eee,
            0 20px 1px -9px rgba(0, 0, 0, 0.15);
          width: 300px;
          padding-left: 30px;
          padding-right: 30px;
          padding-top: 30px;
          border: 1px solid #bbb;
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
