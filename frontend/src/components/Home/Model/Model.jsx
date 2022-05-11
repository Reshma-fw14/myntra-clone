// import React, { useEffect, useState } from 'react'
// import "./Model.css";
// import axios from 'axios'
// import {Link} from "react-router-dom"

// export default function Model(api) {
//     const [data, setData]=useState([])

//     // console.log(api.api)
//     const API=api.api;

//     useEffect(()=>{
//        getData()
//     },[])

//     const getData=()=>{
//         axios.get(`${API}?_limit=5`).then(({data})=>{
//             // console.log(data)
//             setData(data)
//         })
//     }
//     // console.log(data)

//   return (
//     <div>
//         <div className='Container'>
//             {/* top div */}
//             <div className='view_all'>
//                 <p>Top Products for You</p>
//                 <Link to="/viewAllProducts"><button id='viewAll_btn'>View All</button></Link>
//             </div>

//             {/* bottom div */}
//             <div className='items'>
//                 {data.map((e)=>{
//                     return(
//                     <div className='main_div'>

//                         <div className='image'>
//                            <img style={{width:'100%', height:'100%'}} src={e.image[0]} alt="img" />
//                         </div>

//                         <div className='decription'>
//                            <div className='des'>
//                                 <Link to=""><p>{e.description}</p></Link>
//                            </div>
//                             <div className='offer_div'>
//                                 <p>{`${e.price}/-`}</p>
//                                 <p>{e.strikeOff_price}</p>
//                                 <p>{`${e.offer}% off`}</p>
//                             </div>
//                         </div>

//                     </div>
//                     )
//                 })}
//             </div>
//         </div>
//     </div>
//   )
// }


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import React, { useEffect, useState } from 'react'
import "./Model.css";
import axios from 'axios'
import {Link} from "react-router-dom"

export default function Test(api) {
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
        <Link to={'viewAllProducts'}><button type="button" class="btn btn-primary" style={{marginLeft:'1520px'}}>View All</button></Link>
        <div style={{width:"95%", height:'500px', display:'flex'}}>
        {data.map((e)=>{
            return(
                <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <img style={{width:'350px', height:"350px", marginBottom:'0px'}} src={e.image[0]} alt="img" />
                    <Typography gutterBottom variant="p" component="div" className='brand'>
                    {e.brand}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {e.description}
                    </Typography>
                    <div style={{display:'flex', justifyContent:'space-around'}}>
                    <Typography style={{color:'#212121', fontWeight:'600', fontSize:'16px'}}>
                        {`${e.price}/-`}
                    </Typography>
                    <Typography style={{textDecoration:'line-Through', color:'#878787'}}>
                        {`${e.strikeOff_price}/-`}
                    </Typography>
                    <Typography style={{color:'#388e3c'}}>
                        {`${e.offer}% Off`}
                    </Typography>
                    </div>
                </CardContent>
                </Card>
            )
        })}
    </div>
    </div>
  )
}