import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

import styled from 'styled-components';

export const SignUp = ({ signUp, authError, haveAccount, setHaveAccount }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [hovered, setHovered] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    signUp({ email, password, firstName, lastName });
  };

  return (
    <LoginWrapper>
      <form onSubmit={onSubmit}>
        <div className="auth-title">Sign Up</div>
        <br />
        <hr />
        <br />
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <LoginButton
          hovered={hovered}
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
        >
          Sign Up
        </LoginButton>
      </form>
      <div>{authError ? <p>{authError}</p> : null}</div>
      <div className="accountset" onClick={() => setHaveAccount(!haveAccount)}>
        <br />
        <div className="auth-switch">Already Have an Account?</div>
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
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

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
  margin-top: 15px;
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
