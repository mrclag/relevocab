import React, { useState } from 'react';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';

import styled from 'styled-components';

const LoginPage = () => {
  const [haveAccount, setHaveAccount] = useState(false);

  return (
    <LoginWrapper>
      <div class="title">Relevocab</div>
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
  );
};

export default LoginPage;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
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
    box-shadow: 4px 6px 15px 1px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: row;
  }

  .title {
    font-size: 2.5em;
    color: #2c8fcb;
    font-weight: bold;
  }
`;
