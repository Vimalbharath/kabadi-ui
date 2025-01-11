import React from 'react';
import Player from './Player';
const Players = ({tours}) => {
  return (
  <section>
    <div >
      <h2>our Players</h2>
      
    </div>
    <div>
      {tours.map((tour)=>{
      return <Player key={tour.playerid}{...tour}></Player>
      }
      )}
    </div>
  </section>
  );
};

export default Players;