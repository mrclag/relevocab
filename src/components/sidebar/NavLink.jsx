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
        color: selected ? '#2a416f' : '#515151',
        borderBottom: selected ? '2px solid #f4f4f4' : '2px solid #f7f7f7',
        // backgroundColor: selected ? '#2a416f' : '#f7f7f7',
        borderRight: selected ? '10px solid #2a416f' : 'none',
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
