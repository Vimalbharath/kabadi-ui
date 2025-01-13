import React from 'react';
import { useState } from 'react';
import { useGlobalContext } from './context';
import {  useNavigate, useParams } from 'react-router-dom';
import { api } from '../misc/api';

const AddMatch = ({teams}) => {
 const navigate = useNavigate();
 const { isAddMatchesOpen, closeAddMatches } = useGlobalContext();
  const [matchData, setMatchData] = useState({
    matchid:'',
    date: '',
    ground: '',
    stage: '',
   
  });
   const [matchDataout, setMatchDataout] = useState({
    team1id: '', // Store team IDs here
    team2id: '', 
  });
  
  

  const handleChange = (e) => {
    setMatchData({ ...matchData, [e.target.name]: e.target.value });
     setMatchDataout({ ...matchDataout, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.addMatch(matchData,matchDataout.team1id,matchDataout.team2id); 
      console.log('Match added successfully:', response.data);
      navigate('/matches'); // Redirect to the matches list after successful addition
    } catch (error) {
      console.error('Error adding match:', error);
      // Handle error, e.g., display an error message to the user
    }
  };

  return (
   <div
      className={`${
        isAddMatchesOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
      <h2>Add New Match</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date:</label>
          <input 
            type="datetime-local" 
            id="date" 
            name="date" 
            value={matchData.date} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="matchid">matchid:</label>
          <input 
            type="number" 
            id="matchid" 
            name="matchid" 
            value={matchData.matchid} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="ground">Ground:</label>
          <input 
            type="text" 
            id="ground" 
            name="ground" 
            value={matchData.ground} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="stage">Stage:</label>
          <input 
            type="text" 
            id="stage" 
            name="stage" 
            value={matchData.stage} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="team1">Team 1:</label>
          <select 
            id="team1" 
            name="team1id" 
            // value={matchDataout.team1} 
            onChange={handleChange} 
            required 
          >
            {/* Assuming you have an array of teams available */}
            <option value="">Select Team 1</option> 
            
                {teams.map((team) => (
                    <option key={team.teamid} value={team.teamid}>
                    {team.name}
                    </option>
                ))}
           
          </select>
        </div>
        <div>
          <label htmlFor="team2">Team 2:</label>
          <select 
            id="team2" 
            name="team2id" 
            // value={matchDataout.team2} 
            onChange={handleChange} 
            required 
          >
            <option value="">Select Team 2</option> 
            
              {teams.map((team) => (
                <option key={team.teamid} value={team.teamid}>
                  {team.name}
                </option>
              ))}
           
          </select>
        </div>
        <button type="submit">Add Match</button>
      </form>
      </div>
        <button className='close-modal-btn' onClick={closeAddMatches}>
          {/* <FaTimes></FaTimes> */}
          X
        </button>
      </div>
   
   
  );
};

export default AddMatch;