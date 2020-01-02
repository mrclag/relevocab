import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

const SignUp = ({ signUp, authError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    console.log(
      'email: ',
      email,
      '; password: ',
      password,
      '; first name: ',
      firstName,
      '; last name: ',
      lastName
    );
    signUp({ email, password, firstName, lastName });
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
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
          <label htmlFor="firstName">firstName</label>
          <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">lastName</label>
          <input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </div>
      </form>
      <div>{authError ? <p>{authError}</p> : null}</div>
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
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
