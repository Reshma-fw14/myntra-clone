import React from 'react';
import { useSelector } from 'react-redux';
import FilterCard from '../Card/FilterCard';
import { useState } from 'react';

export default function Filter() {

  const state=useSelector((state)=>state.ImageReducer)
  // const [State,SetState]=useState(state)
  // console.log(state)


  return (
    <div>
       <div style={{display:'flex', gap:'2%', width:'100%', margin:' 40px 50px', border:'0px'}}>
         {state.images.map((ele)=>
            <FilterCard data={ele}/>
         )} 
     </div>
    </div>
  )
}
