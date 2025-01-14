import React from 'react';
import TeamCard from './TeamCard';
import { api } from '../misc/api';
import { useState } from 'react';
import { useGlobalContext } from '../modal/context';
import EditMatch from '../modal/EditMatch';

const SingleMatch = ({ matchid, date, ground, stage, team1, team2, team1score, team2score ,handlegetallmatches}) => {

  const {  openEditMatches } = useGlobalContext();
 

   const handledeletematch = async () => {
    try {
     
      const response = await api.deletematch(matchid);
      console.log('deleted')
      handlegetallmatches();
    } catch (error) {
      console.log('error')
     
    } finally {
     
    }
  }
   
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

       <button className='btn' type="button" onClick={() => alert(`Deleted ID ${matchid}`,
        handledeletematch(matchid))
    }>Delete</button>
        <EditMatch matchid={matchid}/>
     
       <button onClick={openEditMatches} className='btn'>
        Edit Match
      </button>
    </div>
  );
};

export default SingleMatch;