import React from 'react';
import { useState } from 'react';
import { useGlobalContext } from './context';
import { useNavigate } from 'react-router-dom';
import { api } from '../misc/api';
import {useAuth} from '../Context/AuthContext';
// import { FaTimes } from 'react-icons/fa';
const Modal = () => {
   const Auth = useAuth()
  const user = Auth.getUser()
  const { isModalOpen, closeModal } = useGlobalContext();
  const navigate = useNavigate(); 

  const [teamData, setTeamData] = useState({
    name: '',
    captain: '',
    number: '',
    village: '',
  });

  const handleChange = (e) => {
    setTeamData({ ...teamData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.addTeam(teamData,user); 
      console.log('Team added successfully:', response.data);
      navigate('/teams'); // Redirect to the teams list after successful addition
    } catch (error) {
      console.error('Error adding team:', error);
      // Handle error, e.g., display an error message to the user
    } finally{
        closeModal();
    }
  };

  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <h3>modal content</h3>
        <div>
      <h2>Add New Team</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Team Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={teamData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="captain">Captain:</label>
          <input
            type="text"
            id="captain"
            name="captain"
            value={teamData.captain}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="number">Team Number:</label>
          <input
            type="text"
            id="number"
            name="number"
            value={teamData.number}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="village">Village:</label>
          <input
            type="text"
            id="village"
            name="village"
            value={teamData.village}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Team</button>
      </form>
    </div>
        <button className='close-modal-btn' onClick={closeModal}>
          {/* <FaTimes></FaTimes> */}
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;