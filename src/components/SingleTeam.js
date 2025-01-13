import React, { useState,useEffect } from 'react';
import { useParams,Link } from 'react-router-dom'
import { api } from '../misc/api'
import Player from './Player';
import { useGlobalContext } from '../modal/context';
import AddPlayer from '../modal/AddPlayer';


const SingleTeam = () => {
  const {  openAddPlayer } = useGlobalContext();
    const { teamid } = useParams();
    const [selectedTeam,setTeams]=useState([]);
  const handledeleteteam = async () => {
    try {
     
      const response = await api.deleteteam(teamid);
      // console.log(response.data);
      //  setTours(response.data)
      console.log('deleted')
      handlegetteam();
    } catch (error) {
      console.log('error')
      // handleLogError(error)
    } finally {
      // setIsBooksLoading(false)
    }
  }
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
   <button type="button" className='btn'onClick={() => alert(`Attempted to Delete ${name} : ID ${teamid}`, handledeleteteam(teamid))
    }>Delete Team</button>
  <h2> {teamid}</h2>   
     <h2> {name}</h2>
     <h2> {captain}</h2>
     <h2> {number}</h2>
     <h2> {village}</h2>
      <AddPlayer/>
       <button onClick={openAddPlayer} className='btn'>
        Add Player
      </button>
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