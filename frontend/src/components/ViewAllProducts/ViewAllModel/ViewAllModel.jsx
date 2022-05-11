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
//         <div classNameName='Container'>
//             {/* top div */}
//             <div classNameName='view_all'>
//                 <p>Top Products for You</p>
//                 <Link to="/viewAllProducts"><button id='viewAll_btn'>View All</button></Link>
//             </div>

//             {/* bottom div */}
//             <div classNameName='items'>
//                 {data.map((e)=>{
//                     return(
//                     <div classNameName='main_div'>

//                         <div classNameName='image'>
//                            <img style={{width:'100%', height:'100%'}} src={e.image[0]} alt="img" />
//                         </div>

//                         <div classNameName='decription'>
//                            <div classNameName='des'>
//                                 <Link to=""><p>{e.description}</p></Link>
//                            </div>
//                             <div classNameName='offer_div'>
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

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Test(api) {
  const [data, setData] = useState([]);
  const All=useSelector((state)=>state.addKurtiReducer)
  // const shirt=useSelector((state)=>state.addKurtiReducer)
  // const dress=useSelector((state)=>state.addKurtiReducer)
  console.log("kurti",All.kurti)
  // console.log("shirt",shirt)
  // console.log("dress:",dress)

  return (
    <div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gridGap:'10px'}}>
        {[].map((e) => {
          return (
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <img src={e.image[0]} alt="img" style={{width:'350px', height:"350px", marginBottom:'0px'}}/>
                <Typography gutterBottom variant="h5" component="div">
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
          );
        })}
      </div>
    </div>
  );
}
