import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions.js';

const SignIn = ({ history, signIn, authError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    console.log('email: ', email, '; password: ', password);
    signIn({ email, password });
  };

  return (
    <div style={{ marginLeft: '500px' }}>
      <form onSubmit={onSubmit}>
        <h5>Sign In</h5>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            id="email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            id="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button>Login</button>
          <div>{authError ? <p>{authError}</p> : null}</div>
        </div>
      </form>
    </div>
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
