import React from 'react';
import Team from './Team';
import { useState,useEffect } from 'react';
import { api } from '../misc/api'
const Teams = () => {


  const [teams,setTeams]=useState([]);

  const handlegetallteams = async () => {
    try {
      const response = await api.getallteams();
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