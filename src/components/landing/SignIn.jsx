import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions.js';

import styled from 'styled-components';

export const SignIn = ({
  history,
  signIn,
  authError,
  haveAccount,
  setHaveAccount
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hovered, setHovered] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    signIn({ email, password });
  };

  return (
    <LoginWrapper>
      <form onSubmit={onSubmit}>
        <div className="auth-title">Sign In</div>
        <br />
        <hr />
        <br />
        <input
          type="email"
          value={email}
          id="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          id="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          required
        />
        <LoginButton
          hovered={hovered}
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
        >
          Login
        </LoginButton>
        <div>{authError ? <p>{authError}</p> : null}</div>
      </form>
      <div className="accountset" onClick={() => setHaveAccount(!haveAccount)}>
        <br />
        <div className="auth-switch">Need to Sign Up?</div>
      </div>
    </LoginWrapper>
  );
};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

const LoginButton = styled.button`
  color: ${props => (props.hovered ? '#107bbd' : 'white')};
  margin-top: 20px;
  height: 35px;
  width: 100%;
  background-color: ${props => (props.hovered ? 'white' : '#107bbd')};
  border-radius: 5px;
  border: 1px solid #107bbd;
  outline: none;
  cursor: pointer;
`;

const LoginWrapper = styled.div`
  margin-top: 50px;
  input {
    width: 95%;
    padding-left: 10px;
    height: 30px;
    margin-bottom: 8px;
  }
  .auth-title {
    font-size: 24px;
  }
  .auth-switch {
    color: blue;
    cursor: pointer;
  }
`;
