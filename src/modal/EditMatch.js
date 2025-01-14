import React from 'react';
import { useState } from 'react';
import { useGlobalContext } from './context';
import {  useNavigate, useParams } from 'react-router-dom';
import { api } from '../misc/api';

const EditMatch = ({teams}) => {
 const navigate = useNavigate();
 const { isEditMatchesOpen, closeEditMatches } = useGlobalContext();
 return (
    <div
      className={`${
        isEditMatchesOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    > <div className='modal-container'>
      <h2>Add New Match</h2>
    
     <button className='close-modal-btn' onClick={closeEditMatches}>
          {/* <FaTimes></FaTimes> */}
          X
        </button>
      </div>
    </div>

   
   
  );
 };

export default EditMatch;