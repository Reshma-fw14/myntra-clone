
import React from 'react'
import {ActionCreators} from "../states/store/ActionCreator"
import {bindActionCreators} from "redux"
import {useDispatch} from "react-redux"
import {useNavigate} from 'react-router-dom'

export default function FilterCard({data}) {
  
    const dispatch=useDispatch()
   const nav=useNavigate()

   const action=bindActionCreators(ActionCreators,dispatch)

   function handleClick(cat){
    action.TypeAction({ url: 'http://localhost:4000/fashion' });
    action.CounterAction(1)
    nav(`/products/${cat}`) 
   }

  return (
    <div>
        <button onClick={()=>{handleClick(data.key)}} style={{border:"none"}}>
            <img style={{width:'100%', height:'100%'}} src={data.image} alt="img" />
        </button>
    </div>
  )
}
