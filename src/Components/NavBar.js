import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar">
    <div className="Logo">
      <h1>Space Travelers Hub</h1>
    </div>
    <ul className="links">
      <NavLink className="link" to="/">Rockets</NavLink>
      <NavLink className="link" to="/missions">Missions</NavLink>
      <NavLink className="link" to="/my-profile">My Profile</NavLink>
    </ul>
  </nav>
);

export default Navbar;
