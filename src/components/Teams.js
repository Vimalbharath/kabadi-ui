import React from 'react';
import Team from './Team';
import { useState,useEffect } from 'react';
import { api } from '../misc/api'
import { useGlobalContext } from '../modal/context';
import Modal from '../modal/Modal';
import AddMatch from '../modal/AddMatch';
import  { useAuth }  from '../Context/AuthContext';

const Teams = () => {
  const Auth = useAuth()
  const user = Auth.getUser()
const {  openModal,openAddMatches } = useGlobalContext();

  const [teams,setTeams]=useState([]);

  const handlegetallteams = async () => {
    try {
      const response = await api.getallteams(user);
      console.log(response.data);
      setTeams(response.data)
    } catch (error) {
      // handleLogError(error)
    } finally {
      // setIsBooksLoading(false)
    }
  }
  useEffect(() => {
    handlegetallteams()
  }, [])
  return (
  <section>
    <div >
      <h2>Teams</h2>
      <AddMatch teams={teams}/>
     
       <button style={Auth.adminStyle()} onClick={openAddMatches} className='btn'>
        Add Match
      </button>
      {console.log(teams)}
      <Modal/>
    
      <button style={Auth.adminStyle()} onClick={openModal} className='btn'>
        Add Team
      </button> 
      
    </div>
      <div>
        {teams.map((team)=>{
        return <Team key={team.teamid}{...team}></Team>
        }
        )}
      </div>
  </section>
  );

};

export default Teams;