import React from 'react';

import logo from '../../images/vocarta_logo.png';

// import { Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div>
          <img className="header-logo" src={logo} alt="Vocarta Logo" />
          {/* <span className="header-title">Vocarta</span> */}
        </div>
        {/* <div>Login</div> */}
      </div>
    </div>
  );
};

export default NavBar;
