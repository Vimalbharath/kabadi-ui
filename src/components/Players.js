import React from 'react';
import { useState,useEffect } from 'react';
import { api } from '../misc/api'
import Player from './Player';
// const url = 'http://localhost:8080/players'
// const [loading,setLoading]=useState(true);

//   // const removeTour=(id)=>{
//   //   const newTours=tours.filter((tour)=>tour.id!==id);
//   //   setTours(newTours);
//   // }

//   const fetchTours=async () => {
//   try {
//   const response=await fetch(url); 
//   console.log(response);
//   const tours=await response.json();
//   console.log(tours);
//   setLoading(false);
//   setTours(tours);
//   } catch(error){
//    console.log(error);
//   }
// };
//   useEffect(()=>{
//     fetchTours();
//   },[]);



// function App(){
//style={{backgroundColor:'antiquewhite'}}
//   console.log('vimal');
//  return (<h4>Hello Vimalbharath</h4>); 
// }
const Players = () => {

  const [tours,setTours]=useState([]);

  const handlegetallplayers = async () => {
    try {
      // setIsBooksLoading(true)
      const response = await api.getallplayers();
      console.log(response.data);
       setTours(response.data)
    } catch (error) {
      // handleLogError(error)
    } finally {
      // setIsBooksLoading(false)
    }
  }
  useEffect(() => {
    handlegetallplayers()
  }, [])
  return (
  <section>
    <div >
      <h2>Players</h2>
      
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