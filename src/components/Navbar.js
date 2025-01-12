import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {

  return (
    
    <nav>
        
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
        <li>
          <Link to='/teams'>Teams</Link>
        </li>
        <li>
          <Link to='/players'>Players</Link>
        </li>
        <li>
          <Link to='/matches'>Matches</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar