import React, { useState,useEffect } from 'react';
import pic from '../images/default.png'
import { api } from '../misc/api'
import '../App.css';
import { Button } from 'bootstrap';


const Player = ({ playerid, name, age, image, weight, address ,handlegetallplayers}) => {
 const path=process.env.PUBLIC_URL + `/images/${playerid}.jpg`

  const handledeleteplayer = async () => {
    try {
     
      const response = await api.deleteplayer(playerid);
      // console.log(response.data);
      //  setTours(response.data)
      console.log('deleted')
      handlegetallplayers();
    } catch (error) {
      console.log('error')
      // handleLogError(error)
    } finally {
      // setIsBooksLoading(false)
    }
  }
  // useEffect(() => {
  //   handledeleteplayer()
  // }, [])
  return (
    <div className='player-cont'>
    <article className="player-card"> 
     <img 
          src={image ? path : pic} 
          alt={`${name}`} 
          className="player-image" 
        />
      <div className='player-id'>
        <p>{playerid}</p>
       
         
      </div>
 <h2>{name}</h2>
      
      <p>Age: {age}</p>
      <p>Weight: {weight}</p>
      <p>Address: {address}</p>
      <button className='btn' type="button" onClick={() => alert(`Deleted ${name} : ID ${playerid}`, handledeleteplayer(playerid))
    }>Delete</button>
    </article>
    
    </div>
  );
};

export default Player;