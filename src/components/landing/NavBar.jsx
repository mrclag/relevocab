import React from 'react';

import logo from '../../images/vocarta_logo.png';

// import { Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div className="header">
      <div className="header-content">
        <img className="header-logo" src={logo} alt="Vocarta Logo" />
        <div className="header-title">Vocarta</div>
      </div>
    </div>
  );
};

export default NavBar;
