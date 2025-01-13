import React from 'react';
import { useState } from 'react';
import { useGlobalContext } from './context';
import {  useNavigate, useParams } from 'react-router-dom';
import { api } from '../misc/api';
// import { FaTimes } from 'react-icons/fa';
const AddPlayer = () => {
  const { isAddPlayerOpen, closeAddPlayer } = useGlobalContext();
  const navigate = useNavigate(); 

 
  const { teamid } = useParams(); // Get the team ID from the URL

  const [playerData, setPlayerData] = useState({
    name: '',
    age: '',
    image: '',
    weight: '',
    address: 'Chennai', // Set default address to "Chennai"
  });

  const handleChange = (e) => {
    setPlayerData({ ...playerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add teamid to the player data
      const newPlayerData = { ...playerData, teamid: teamid }; 

      const response = await api.addPlayer(newPlayerData,teamid); 
      console.log('Player added successfully:', response.data);
      navigate(`/teams/${teamid}`); // Redirect to the specific team page
    } catch (error) {
      console.error('Error adding player:', error);
      // Handle error, e.g., display an error message to the user
    }
  };
  return (
    <div
      className={`${
        isAddPlayerOpen ? 'Modal-overlay show-Modal' : 'Modal-overlay'
      }`}
    >
      <div className='Modal-container'>
        <h3>Add New Player</h3>
        <div>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Player Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={playerData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={playerData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={playerData.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="weight">Weight:</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={playerData.weight}
            onChange={handleChange}
            required
          />
        </div>
        {/* Address field is pre-filled with "Chennai" */}
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={playerData.address}
            onChange={handleChange} 
            
          /> 
        </div>
        <button type="submit">Add Player</button>
      </form>
    </div>
        <button className='close-Modal-btn' onClick={closeAddPlayer}>
          {/* <FaTimes></FaTimes> */}
          X
        </button>
      </div>
    </div>
  );
};

export default AddPlayer;