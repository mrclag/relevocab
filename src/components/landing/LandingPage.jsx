import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import NavBar from './NavBar';
import { Container } from 'react-bootstrap';

import background from '../../images/home-shape.png';
import mockup from '../../images/Group 1.png';
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
      <img className="background-img" src={background} alt="" />
      <NavBar />
      <div className="main-content">
        <Container className="content-box">
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
        </Container>
        <div>
          <img className="mockup" src={mockup} alt="mockup" />
        </div>
        <div className="features-section">
          <div className="features-section-title">Learn the right...</div>
          <div className="features-container">
            <div className="feature">
              <div className="feature-head">
                <img src="" alt="" />
                Words
              </div>
              <div className="feature-title">Find related vocabulary</div>
              <div className="feature-description">
                Search for words based on the subjects you are interested
              </div>
              {/* <div className="feature-learn">Learn more...</div> */}
            </div>
            <div className="feature">
              <div className="feature-head">
                <img src="" alt="" />
                Songs
              </div>
              <div className="feature-title">Learn popular lyrics</div>
              <div className="feature-description">
                Add decks to learn vocabulary based on the songs you can listen
                to all day.
              </div>
              {/* <div className="feature-learn">Learn more...</div> */}
            </div>
            <div className="feature">
              <div className="feature-head">
                <img src="" alt="" />
                Articles
              </div>
              <div className="feature-title">
                Understand interesting articles
              </div>
              <div className="feature-description">
                Learn vocabulary from articles based on your reading level and
                interests.
              </div>
              <div className="feature-learn">Coming Soon</div>
            </div>
          </div>
        </div>
        <div className="more-info"></div>
        <div className="footer"></div>
      </div>
    </LandingPageWrapper>
  );
};

export default LandingPage;
