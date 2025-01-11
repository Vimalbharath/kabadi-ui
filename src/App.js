import './App.css';
import React, { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Tours from './components/Players'
// import axios from 'axios';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'http://localhost:8080/players'
function App() {
  const [loading,setLoading]=useState(true);
  const [tours,setTours]=useState([]);
  // const removeTour=(id)=>{
  //   const newTours=tours.filter((tour)=>tour.id!==id);
  //   setTours(newTours);
  // }

  const fetchTours=async () => {
  try {
  const response=await fetch(url); 
  console.log(response);
  const tours=await response.json();
  console.log(tours);
  setLoading(false);
  setTours(tours);
  } catch(error){
   console.log(error);
  }
};
  useEffect(()=>{
    fetchTours();
  },[]);

return (<h4>Hello Vimalbharath</h4>); 
}
// function App(){
//   console.log('vimal');
//  return (<h4>Hello Vimalbharath</h4>); 
// }

export default App;