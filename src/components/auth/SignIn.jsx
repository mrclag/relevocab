import React from 'react';

const SignIn = () => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h5>Sign In</h5>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" onChange={} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <input type="password" />
      </form>
    </div>
  );
};

export default SignIn;
