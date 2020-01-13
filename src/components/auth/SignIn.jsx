import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions.js';

import styled from 'styled-components';

const SignIn = ({ history, signIn, authError }) => {
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
        <div class="auth-title">Sign In</div>
        <br />
        <hr />
        <br />
        <div class="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            id="email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div class="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            id="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <LoginButton
            hovered={hovered}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
          >
            Login
          </LoginButton>
          <div>{authError ? <p>{authError}</p> : null}</div>
        </div>
      </form>
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
  color: ${props => (props.hovered ? 'white' : '#107bbd')};
  margin-top: 5px;
  height: 25px;
  width: 100%;
  background-color: ${props => (props.hovered ? '#107bbd' : 'white')};
  border-radius: 5px;
  border: 1px solid #107bbd;
  outline: none;
  cursor: pointer;
`;

const LoginWrapper = styled.div``;
