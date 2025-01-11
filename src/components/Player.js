import React, { useState } from 'react';
import pic from '../images/Scarlet.jpg'
import '../App.css';


const Player = ({ playerid, name, age, image, weight, address }) => {
  return (
    <div className='player-cont'>
    <article className="player-card"> 
      <img src={pic} alt={`${name}`} className="player-image" />
      <div className='player-id'>
        <p>{playerid}</p>
       
         
      </div>
 <h2>{name}</h2>
      
      <p>Age: {age}</p>
      <p>Weight: {weight}</p>
      <p>Address: {address}</p>
    </article>
    </div>
  );
};

export default Player;