import React, { useState } from 'react';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';

import styled from 'styled-components';

import flashcards from '../../images/flashcardsbackground.png';

const LoginPage = () => {
  const [haveAccount, setHaveAccount] = useState(false);
  const [sidebarVisibility, setSidebarVisibility] = useState(false);

  const toggleSidebar = () => setSidebarVisibility(!sidebarVisibility);

  return (
    <PageWrapper>
      <div className="header">
        <div className="logo">RV</div>
        <div className="title">Relevocab</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <MainLandingWrapper>
          <div className="landing-text">
            <div className="heading">Relevocab</div>
            <div className="description">Learn the right words.</div>
            <div className="description-text">
              Relevocab is the smart way to build vocabulary through flashcards,
              allowing language-learners to build their vocabulary through
              relevant content.
            </div>
            <button onClick={() => toggleSidebar()}>Sign Up</button>{' '}
            {/* <div className="see-more">See more</div> */}
          </div>
        </MainLandingWrapper>
        <LoginWrapper sidebarVisibility={sidebarVisibility}>
          <img src={flashcards} alt="" />
          <div className="auth-wrapper">
            {haveAccount ? (
              <div>
                <SignIn />
                <div
                  className="accountset"
                  onClick={() => setHaveAccount(!haveAccount)}
                >
                  <br />
                  <div className="auth-switch">Need to Sign Up?</div>
                </div>
              </div>
            ) : (
              <div>
                <SignUp />
                <div
                  className="accountset"
                  onClick={() => setHaveAccount(!haveAccount)}
                >
                  <br />
                  <div className="auth-switch">Already Have an Account?</div>
                </div>
              </div>
            )}
          </div>
        </LoginWrapper>
      </div>
    </PageWrapper>
  );
};

export default LoginPage;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .header {
    position: absolute;
    display: flex;
    flex-direction: row;
    top: 25px;
    left: 0;
    padding-left: 10vw;
    z-index: 10;
    .title {
      padding-left: 20px;
      color: white;
      font-size: 1.5em;
      @media screen and (max-width: 800px) {
        display: none;
      }
    }
    .logo {
      color: white;
      font-size: 1.5em;
    }
  }
`;

const MainLandingWrapper = styled.div`
  width: 100vw;
  background-color: #005191;
  flex-direction: column;
  color: white;
  padding-top: 25vh;
  height: 100vh;
  @media screen and (max-width: 1024px) {
    padding-top: 15vh;
  }
  .landing-text {
    position: absolute;
    left: 10vw;
    width: 500px;
    @media screen and (max-width: 1024px) {
      width: 80vw;
    }
  }
  .heading {
    margin-bottom: 50px;
    font-size: 3rem;
  }
  .description {
    font-size: 2.5rem;
    margin-bottom: 80px;
    &-text {
      color: white;
      font-size: 1.8rem;
    }
  }
  button {
    border: none;
    border-radius: 5%;
    color: #333;
    width: 100px;
    height: 50px;
    margin-bottom: 80px;
    margin-top: 80px;
    background-color: white;
    padding: 8px;
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
  .see-more {
    margin-top: 50px;
    font-size: 1.2em;
  }
`;

const LoginWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  min-width: 400px;
  background: #eee;
  z-index: 4;
  img {
    position: absolute;
    height: 500px;
    width: 380px;
    z-index: 3;
  }
  input {
    width: 270px;
    padding-left: 10px;
    height: 30px;
  }

  .input-field {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }

  .auth-switch {
    cursor: pointer;
  }
  .accountset {
    cursor: pointer;
    color: blue;
    text-align: center;
  }

  .auth-title {
    font-size: 1.5em;
    text-align: center;
  }

  .auth-wrapper {
    padding: 50px 30px;
    background: transparent;
    z-index: 10;
    width: 280px;
    /* I should make the background cards CSS only, instead of PNG */
    /* box-shadow: 4px 6px 15px 1px rgba(0, 0, 0, 0.5); */
    /* box-shadow: 2px 3px 7px 0.5px rgba(0, 0, 0, 0.5); */
    display: flex;
    flex-direction: row;
  }

  .title {
    font-size: 2.5em;
    color: #2c8fcb;
    font-weight: bold;
  }

  @media screen and (min-width: 1300px) {
    padding-right: 15vw;
  }
  @media screen and (max-width: 1024px) {
    display: ${props => (props.sidebarVisibility ? 'flex' : 'none')};
    background: #005191;
    img,
    .auth-wrapper {
      margin-left: 3vw;
    }
  }
`;
