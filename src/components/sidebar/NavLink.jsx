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
        color: '#515151',
        borderBottom: selected ? '2px solid #f4f4f4' : '2px solid #f7f7f7',
        // backgroundColor: selected ? '#2a416f' : '#f7f7f7',
        background: selected ? 'white' : '#f7f7f7',
      }}
      to={to}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <span className="icon">{icon[0]}</span>
      {/* <img src={selected ? icon[1] : icon[0]} alt="icon" /> */}
      {value}
    </Link>
  );
};

export default withRouter(NavLink);
