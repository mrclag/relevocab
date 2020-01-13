import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

import styled from 'styled-components';

const SignUp = ({ signUp, authError }) => {
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
        <div class="auth-title">Sign Up</div>
        <br />
        <hr />
        <br />
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <LoginButton
            hovered={hovered}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
          >
            Sign Up
          </LoginButton>
        </div>
      </form>
      <div>{authError ? <p>{authError}</p> : null}</div>
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
  color: ${props => (props.hovered ? 'white' : '#107bbd')};
  margin-top: 5px;
  height: 35px;
  width: 100%;
  background-color: ${props => (props.hovered ? '#107bbd' : 'white')};
  border-radius: 5px;
  border: 1px solid #107bbd;
  outline: none;
  cursor: pointer;
`;

const LoginWrapper = styled.div``;
