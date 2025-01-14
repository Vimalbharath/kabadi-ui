import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/teams" className="nav-link">
            Teams
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/players" className="nav-link">
            Players
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/matches" className="nav-link">
            Matches
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;