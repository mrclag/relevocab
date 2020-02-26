import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavLink = ({ value, to, location, icon }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const selected = hovered || location.pathname === to;

  return (
    <Link
      className="nav-link"
      style={{
        color: selected ? 'white' : 'black',
        borderBottom: selected ? '2px solid #107bbd' : '2px solid #f4f4f4',
        backgroundColor: selected ? '#107bbd' : '#f4f4f4'
      }}
      to={to}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <img src={selected ? icon[1] : icon[0]} alt="icon" />
      {value}
    </Link>
  );
};

export default withRouter(NavLink);
