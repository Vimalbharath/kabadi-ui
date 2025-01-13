import React from 'react';
import SingleMatch from './SingleMatch';
import { useState,useEffect } from 'react';
import { api } from '../misc/api'
import AddMatch from '../modal/AddMatch';
import { useGlobalContext } from '../modal/context';

const Matches = () => {
  const {  openAddMatches } = useGlobalContext();
 const [matches,setMatches]=useState([]);

  const handlegetallmatches = async () => {
    try {
      const response = await api.getallmatches();
      console.log(response.data);
      setMatches(response.data)
    } catch (error) {
      // handleLogError(error)
    } finally {
      // setIsBooksLoading(false)
    }
  }
  useEffect(() => {
    handlegetallmatches()
  }, [])
  return (
  <section>
    <div >
      <h2>Matches</h2>
       {/* <AddMatch/>
       <button onClick={openAddMatches} className='btn'>
        Add Match
      </button> */}
    </div>
      <div>
        {matches.map((match)=>{
        return <SingleMatch key={match.matchid}{...match}handlegetallmatches={handlegetallmatches}></SingleMatch>
        }
        )}
      </div>
  </section>
  );
};

export default Matches;