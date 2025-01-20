import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'
import '../Navbar.css'; // Import the CSS file
import AdminPage from './AdminPage';

function Navbar() {

   const { getUser, userIsAuthenticated, userLogout } = useAuth()

  const logout = () => {
    userLogout()
  }

  const logoutMenuStyle = () => {
    return userIsAuthenticated() ? { "display": "block" } : { "display": "none" }
  }

  const getUserName = () => {
    const user = getUser()
    return user ? user.name : ''
  }
  return (
    <nav className="navbar">
       <div header style={logoutMenuStyle()}>{`Hi ${getUserName()}`}</div>
          <div as={Link} to="/" style={logoutMenuStyle()} onClick={logout}>Logout</div>
          <AdminPage/>
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