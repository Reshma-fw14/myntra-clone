import React, { useEffect, useState } from 'react'
import "./Model.css";
import axios from 'axios'
import {Link} from "react-router-dom"

export default function Model(api) {
    const [data, setData]=useState([])

    // console.log(api.api)
    const API=api.api;

    useEffect(()=>{
       getData()
    },[])

    const getData=()=>{
        axios.get(`${API}?_limit=5`).then(({data})=>{
            // console.log(data)
            setData(data)
        })
    }
    // console.log(data)

  return (
    <div>
        <div className='Container'>
            {/* top div */}
            <div className='view_all'>
                <p>Top Products on Shirts</p>
                <Link to={"/viewAllProducts"}><button id='viewAll_btn'>View All</button></Link>
            </div>

            {/* bottom div */}
            <div className='items'>
                {data.map((e)=>{
                    return(
                    <div className='main_div'>

                        <div className='image'>
                           <img style={{width:'100%', height:'100%'}} src={e.image[0]} alt="img" />
                        </div>

                        <div className='decription'>
                           <div className='des'>
                                <Link to=""><p>{e.description}</p></Link>
                           </div>
                            <div className='offer_div'>
                                <p>{`${e.price}/-`}</p>
                                <p>{e.strikeOff_price}</p>
                                <p>{`${e.offer}% off`}</p>
                            </div>
                        </div>

                    </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
