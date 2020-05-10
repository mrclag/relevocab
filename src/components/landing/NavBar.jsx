import React from 'react';

import logo from '../../images/vocarta_logo.png';

const NavBar = () => {
  return (
    <div className="header">
      <img className="header-logo" src={logo} alt="Vocarta Logo" />
      <div className="header-title">Vocarta</div>
    </div>
  );
};

export default NavBar;
