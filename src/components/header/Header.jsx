import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import logo from '../../images/vocarta_logo.png';

import { HeaderWrapper } from './Header.styles.js';

import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

export const Header = ({ signOut }) => {
  return (
    <HeaderWrapper>
      <Container>
        <div className="header-content">
          <div className="title">
            <img className="logo" src={logo} alt="logo" />
            <div className="app-title">Vocarta</div>
            <Link to="/" className="nav-button">
              Decks
            </Link>
            <Link to="/songs" className="nav-button">
              Songs
            </Link>
          </div>
          <div className="nav-button" onClick={signOut}>
            Logout
          </div>
          {/* <button onClick={signOut}>Logout</button> */}
        </div>
      </Container>
    </HeaderWrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(Header);
