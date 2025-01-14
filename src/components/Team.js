import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import the CSS file

const Team = ({ teamid, name }) => {
  return (
    <Link to={`/team/${teamid}`} className="team-card"> 
      <div>
        <h3>{name}</h3> 
      </div>
    </Link>
  );
};

export default Team;