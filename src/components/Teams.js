import React from 'react';
import Team from './Team';
import { useState,useEffect } from 'react';
import { api } from '../misc/api'
import { useGlobalContext } from '../modal/context';
import Modal from '../modal/Modal';
import AddMatch from '../modal/AddMatch';

const Teams = () => {
const {  openModal,openAddMatches } = useGlobalContext();

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
    <section className="teams-container">
      <div className="teams-header">
        <h2>Teams</h2>
        <div className="actions">
          <button onClick={openAddMatches} className="btn add-match-btn">
            Add Match
          </button>
          <button onClick={openModal} className="btn add-team-btn">
            Add Team
          </button>
        </div>
      </div>

      <div className="team-grid">
        {teams.map((team) => (
          <Team key={team.teamid} {...team} />
        ))}
      </div>
    </section>
  );
};

export default Teams;