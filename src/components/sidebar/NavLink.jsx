import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavLink = ({ value, to, location }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <Link
      style={{
        color: hovered || location.pathname === to ? '#107bbd' : 'black',
        textDecoration: 'none',
        fontWeight: 'bold',
        height: '5vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '33.34%',
        borderBottom:
          hovered || location.pathname === to
            ? '2px solid #107bbd'
            : '2px solid #eee'
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
