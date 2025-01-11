import React, { useState } from 'react';
import pic from '../images/Scarlet.jpg'
import '../App.css';


const Player = ({ playerid, name, age, image, weight, address }) => {
  return (
    <article className="player-card"> 
      <img src={pic} alt={`${name}`} className="player-image" />
      <h2>{name}</h2>
      <p>Player ID: {playerid}</p>
      <p>Age: {age}</p>
      <p>Weight: {weight}</p>
      <p>Address: {address}</p>
    </article>
  );
};

export default Player;