import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import logo from '../../images/vocarta_logo.png';

import { HeaderWrapper } from './Header.styles.js';

export const Header = ({ signOut }) => {
  return (
    <HeaderWrapper>
      <div className="container header-content">
        <div className="title">
          <img className="logo" src={logo} alt="logo" />
          <div className="app-title">Vocarta</div>
          <div className="nav-button">Home</div>
          <div className="nav-button">Explore</div>
        </div>
        <div className="nav-button" onClick={signOut}>
          Logout
        </div>
        {/* <button onClick={signOut}>Logout</button> */}
      </div>
    </HeaderWrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(Header);
