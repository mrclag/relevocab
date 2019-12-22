import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavLink = ({ value, to, location }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <Link
      style={{
        color: hovered
          ? '#566df5'
          : location.pathname === to
          ? '#566df5'
          : 'black',
        textDecoration: 'none',
        fontWeight: 'bold',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '33.34%',
        borderBottom: hovered ? '2px solid #566df5' : '2px solid #eee'
      }}
      to={to}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {value}
    </Link>
  );
};

export default withRouter(NavLink);
