import React, { useState,useEffect } from 'react';
import { useParams,Link } from 'react-router-dom'
import { api } from '../misc/api'
import Player from './Player';


const SingleTeam = () => {
    const { teamid } = useParams();
    const [selectedTeam,setTeams]=useState([]);

  const handlegetteam = async () => {
    try {
      const response = await api.getteam(teamid);
      console.log(response.data);
      setTeams(response.data)
     
    } catch (error) {
      // handleLogError(error)
    } finally {
      // setIsBooksLoading(false)
    }
  }
  useEffect(() => {
    handlegetteam()
  }, [])
  const {captain,name,number,village,players}=selectedTeam;
   
  return (


 <div>
  <h2> {teamid}</h2>   
     <h2> {name}</h2>
     <h2> {captain}</h2>
     <h2> {number}</h2>
     <h2> {village}</h2>
          {selectedTeam.players && selectedTeam.players.length > 0 && ( // Check if players exist and have elements
        <h2>Players for {selectedTeam.name}</h2>
      )}

      {selectedTeam.players && selectedTeam.players.length > 0 && ( // Check again before rendering
        <ul>
          {selectedTeam.players.map((player) => (
            <li key={player.playerid}>
              <p>{player.name}</p>
              <Player key={player.playerid} {...player} />
            </li>
          ))}
        </ul>
      )}

      {selectedTeam.players && selectedTeam.players.length === 0 && ( // Show message if no players
        <p>No Players Found</p>
      )}
        </div>

         );
};

export default SingleTeam;