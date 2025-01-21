import React from 'react';
import { useState } from 'react';
import { useGlobalContext } from './context';
import {  useNavigate, useParams } from 'react-router-dom';
import { api } from '../misc/api';
import {useAuth} from '../Context/AuthContext';

const EditMatch = ({matchid}) => {
   const Auth = useAuth()
  const user = Auth.getUser()
 const navigate = useNavigate();
   const {  isEditOpen } = useGlobalContext();
 const { isEditMatchesOpen, closeEditMatches } = useGlobalContext();
 const [matchData, setMatchData] = useState({
    team1score:'',
    team2score: '',
   
  });

  const handleChange = (e) => {
    setMatchData({ ...matchData, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.updateMatch(matchData,matchid,user); 
      console.log('Match updated successfully:', response.data);
      closeEditMatches();
      navigate('/matches'); // Redirect to the matches list after successful addition
    } catch (error) {
      console.error('Error adding match:', error);
      // Handle error, e.g., display an error message to the user
    }
  };

 return (
    <div
      className={`${
        isEditMatchesOpen && isEditOpen ? 'mmodal-overlay show-modal' : 'modal-overlay'
      }`}
    > <div className='modal-container'>
      <h2>Edit Match</h2>
      <form onSubmit={handleSubmit}>
        <h3>Match ID : {matchid}</h3>
      <div>
          <label htmlFor="team1score">Team1Score:</label>
          <input 
            type="number" 
            id="team1score" 
            name="team1score" 
            value={matchData.team1score} 
            onChange={handleChange} 
            required 
          />
        </div>
       <div>
          <label htmlFor="team2score">Team2Score:</label>
          <input 
            type="number" 
            id="team2score" 
            name="team2score" 
            value={matchData.team2score} 
            onChange={handleChange} 
            required 
          />
        </div>
         <button type="submit">Update Match</button>
         </form>
    
     <button className='close-modal-btn' onClick={closeEditMatches}>
          {/* <FaTimes></FaTimes> */}
          X
        </button>
      </div>
    </div>

   
   
  );
 };

export default EditMatch;