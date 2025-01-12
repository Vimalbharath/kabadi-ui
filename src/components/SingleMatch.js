import React from 'react';
import TeamCard from './TeamCard';

const SingleMatch = ({ matchid, date, ground, stage, team1, team2, team1score, team2score }) => {
   
  return (
    <div className="match-card" onClick={() => console.log(matchid)}> 
      <h3>Match ID: {matchid}</h3>
      <p>Date: {date}</p>
      <p>Ground: {ground}</p>
      <p>Stage: {stage}</p>
      
       <TeamCard 
       
        name={team1.name} 
       
      /> 
      vs<TeamCard 
       
        name={team2.name} 
       
      /> 
      
      <p>
        Score: {team1score} - {team2score}
      </p>
    </div>
  );
};

export default SingleMatch;