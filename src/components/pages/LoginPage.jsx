import React, { useState } from 'react';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';

import styled from 'styled-components';

const LoginPage = () => {
  const [haveAccount, setHaveAccount] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'col' }}>
      {/* <NavBar>
        <span className="link-login">Login</span>
      </NavBar> */}
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
            {/*  */}
            <button>Sign Up</button>{' '}
            {/* hidden on screen sizes above 1024px. Good for mobile, shown when the sidebar isn't. */}
            <div>See more</div>
          </div>
        </MainLandingWrapper>
        <LoginWrapper>
          <div class="title"></div>
          <br />
          <br />
          <div class="auth-wrapper">
            {haveAccount ? (
              <div>
                <SignIn />
                <div
                  class="accountset"
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
                  class="accountset"
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
    </div>
  );
};

export default LoginPage;

const MainLandingWrapper = styled.div`
  width: 100vw;
  background-color: #005191;
  flex-direction: column;
  color: white;
  padding-top: 25vh;
  height: 100vh;
  .landing-text {
    position: absolute;
    left: calc(66% - 800px);
    width: 600px;
  }
  .heading {
    margin-bottom: 50px;
    font-size: 3rem;
  }
  .description {
    font-size: 2rem;
    margin-bottom: 80px;
    &-text {
      color: white;
      font-size: 1rem;
    }
  }
  button {
    border: none;
    border-radius: 5%;
    color: #333;
    margin-bottom: 80px;
    background-color: white;
    padding: 8px;
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
`;

const NavBar = styled.div`
  position: absolute;
  height: 70px;
  font-size: 1.2em;
  justify-content: right;
  .link-login {
    position: absolute;
    float: right;
    color: teal;
    margin: 20px;
    z-index: 5;
  }
  @media screen and (max-width: 1024px) {
    color: white;
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

  input {
    width: 200px;
    margin-left: 10px;
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
    background: white;
    /* box-shadow: 4px 6px 15px 1px rgba(0, 0, 0, 0.5); */
    box-shadow: 2px 3px 7px 0.5px rgba(0, 0, 0, 0.5);
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
    display: none;
  }
`;
