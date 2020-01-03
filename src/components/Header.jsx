import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';

const Header = ({ signOut }) => {
  return (
    <div>
      <button onClick={signOut}>Logout</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(Header);
