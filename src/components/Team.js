import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { api } from '../misc/api'

const Team = ({  teamid,name }) => {
  
  return (
    <Link to={`/team/${teamid}`} >
          <div onClick={()=>console.log(teamid)}>
        <div>{teamid}</div>
        <h2>{name}</h2>
    </div>
        </Link>
    
  );
};

export default Team;