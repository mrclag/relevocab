import React, { useState } from 'react';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';

import styled from 'styled-components';

import logo from '../../images/vocarta_logo.png';

const LandingPage = () => {
  const [haveAccount, setHaveAccount] = useState(false);
  const [loginVisibility, setLoginVisibility] = useState(false);

  const toggleSidebar = () => {
    setLoginVisibility(!loginVisibility);
  };

  return (
    <LandingPageWrapper loginVisibility={loginVisibility}>
      <div className="header">
        <img className="header-logo" src={logo} alt="Vocarta Logo" />
        <div className="header-title">Vocarta</div>
      </div>
      <div className="content-box">
        <div className="landing-content">
          <div className="landing-content-text">
            <div className="heading">Vocarta</div>
            <div className="description">Learn the right words.</div>
            <div className="description-text">
              Vocarta is the smart way to build vocabulary. Language learners
              find words relevant to the topics they are interested in, and
              quickly create flashcards to practice.
            </div>
            <button className="button-signup" onClick={() => toggleSidebar()}>
              Sign up for free
            </button>{' '}
          </div>
          <div className="landing-content-login">
            <div className="auth-wrapper">
              <div className="close" onClick={() => toggleSidebar()}>
                X
              </div>
              {haveAccount ? (
                <SignIn
                  haveAccount={haveAccount}
                  setHaveAccount={setHaveAccount}
                  setLoginVisibility={setLoginVisibility}
                />
              ) : (
                <SignUp
                  haveAccount={haveAccount}
                  setHaveAccount={setHaveAccount}
                  setLoginVisibility={setLoginVisibility}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </LandingPageWrapper>
  );
};

export default LandingPage;

const LandingPageWrapper = styled.div`
  width: 100vw;
  display: flex;
  position: relative;
  justify-content: center;
  background-color: #005191;
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
    padding-left: 40vw;
    @media screen and (max-width: 1300px) {
      padding-left: 30vw;
    }
    @media screen and (max-width: 800px) {
      padding-left: 20vw;
    }

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
          display: ${props => (props.loginVisibility ? 'none' : 'unset')};
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
          display: ${props => (props.loginVisibility ? 'flex' : 'none')};
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
