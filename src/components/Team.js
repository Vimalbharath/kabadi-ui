import React, { useState } from 'react';

const Team = ({  teamid,name }) => {
  return (
    <div onClick={()=>console.log(teamid)}>
        <div>{teamid}</div>
        <h2>{name}</h2>
    </div>
  );
};

export default Team;