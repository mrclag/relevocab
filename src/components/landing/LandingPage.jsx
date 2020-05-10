import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import NavBar from './NavBar';
import { Container } from '@material-ui/core';

import { LandingPageWrapper } from './LandingPage.styles';

// import logo from '../../images/vocarta_logo.png';

export const LandingPage = () => {
  const [haveAccount, setHaveAccount] = useState(false);
  const [loginVisibility, setLoginVisibility] = useState(false);

  const toggleSidebar = () => {
    setLoginVisibility(!loginVisibility);
  };

  return (
    <LandingPageWrapper loginVisibility={loginVisibility}>
      <Container>
        <NavBar />
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
        <div className="features">About</div>
      </Container>
    </LandingPageWrapper>
  );
};

export default LandingPage;
