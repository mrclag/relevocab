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
        color: selected ? 'black' : 'white',
        borderBottom: selected ? '2px solid #f4f4f4' : '2px solid #324054',
        backgroundColor: selected ? '#f4f4f4' : '#324054'
      }}
      to={to}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <span className="icon">{selected ? icon[0] : icon[1]}</span>
      {/* <img src={selected ? icon[1] : icon[0]} alt="icon" /> */}
      {value}
    </Link>
  );
};

export default withRouter(NavLink);
