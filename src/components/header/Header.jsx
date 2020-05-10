import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import logo from '../../images/vocarta_logo.png';

import { HeaderWrapper } from './Header.styles.js';

import { Container, Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export const Header = ({ signOut }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    handleClose();
    signOut();
  };

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
          <div className="collapse">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon fontSize="large" style={{ color: 'white' }} />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/">Decks</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/songs">Songs</Link>
              </MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </div>
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
