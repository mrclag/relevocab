import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import logo from '../../images/vocarta_logo.png';

import { HeaderWrapper } from './Header.styles.js';

export const Header = ({ signOut }) => {
  return (
    <HeaderWrapper>
      <div className="title">
        <img className="logo" src={logo} alt="logo" />
        Vocarta
      </div>
      <button onClick={signOut}>Logout</button>
    </HeaderWrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(Header);
