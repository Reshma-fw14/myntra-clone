import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useParams,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import FilterCard from '../Card/FilterCard';
import CarouselModel from "../Carousel/Carousel";
import Filter from '../FilterCard/Filter';

import { bindActionCreators } from "redux";
import { ActionCreators } from "../states/store/ActionCreator";
import { useDispatch } from "react-redux";

export default function Model() {
  const nav = useNavigate()
 const limit = 10;
  const [data, setData]=useState([])
    const url = useSelector((state) => state.TypeReducer);
    const counter=useSelector((state)=>state.CounterReducer)
    // console.log("url:",url.url)

    const { gender } = useParams();

  const isActive = useMediaQuery("(max-width:800px)");
  const [pageNumber, setPageNumber] = React.useState(10);

    useEffect(()=>{
       getData()
       getPage();
    },[counter])



    const getData=()=>{
      axios.get(`${url.url}/?gender=${gender}&_page=1&_limit=${limit}`).then(({data})=>{
        // console.log(data)
        setData(data)
      })
    }



    function getPage() {
        axios.get(`${url.url}/?gender=${gender}`).then(({ data }) => {
          setPageNumber(data.length);
        });
      }

      const dispatch = useDispatch();
      const action = bindActionCreators(ActionCreators, dispatch);

      const handleClick=(singleItem)=>{
          // console.log("singleItem",singleItem)
          action.TypeAction({ url: singleItem });
          nav(`/ProductView/${singleItem.id}`)
      }



      const img=["https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-topbannercarousel-p5-brands-4070.jpg",
              "https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-banner1-men-p4-brands-min50.jpg",
              "https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-banner1-men-p3-brands-upto70.jpg"
            ];

  return (
    <>

     <h1>Best of All Brands</h1>
    <CarouselModel img={img}/><br /><br />

    <div style={{display:'flex'}}>
      <div style={{height:'500px',width:'850px',marginRight:'20px'}}><img height='100%' width='100%' src="https://images-static.nykaa.com/uploads/c620335e-85dc-4bee-a0ee-02665668b794.gif?tr=w-600,cm-pad_resize" alt="slide1" /></div>
      <div style={{height:'500px',width:'850px'}}><img height='100%' width='100%'src="https://images-static.nykaa.com/uploads/3252ce59-13b6-4a92-b7a2-95f2402ce7e9.gif?tr=w-600,cm-pad_resize" alt="slide2" /></div>
    </div>
    <br /><br />

  <div>
    <div style={{marginLeft:'240px'}}><img width="1290px" src="https://images-static.nykaa.com/tr:w-1162,c-at_max/uploads/85a8480c-5f90-4a8e-8c8c-4e6fc034d780.gif" alt="" /></div>
    <div style={{display:'flex',margin:'20px 240px'}}>
      <div style={{marginRight:'10px'}}><img src="https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/1232de15-36f5-4939-a72f-3ee8306bec6e.jpg" alt="" /></div>
      <div><img src="https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/86856eb5-a0f3-4f1f-b1fa-f2c3ec8b2acf.jpg" alt="" /></div>
    </div>
  </div>


  <Filter />
   
    <h1 style={{textAlign:'center', color:'silver'}}>Choose Your Favorite</h1>
      <ImageList
        className="container_user_listing"
        sx={{ width: "80%", height: "90%" }}
        variant="woven"
        cols={isActive ? 2 : 5}
        gap={8}
      >
        {data.map((item) => (
          <ImageListItem key={item.id}>
            <Card sx={{ maxWidth: 245, marginBottom:9 }}>
              {/* <CardMedia
                component="img"
                image={item.image[0]}
                alt="green iguana"
              /> */}
              <CardContent>
                  <img style={{height:'300px', width:'100%'}} src={item.image[0]} alt="" />
                <Typography variant="body2" color="text.secondary" style={{color:'black', fontSize:'16px', fontWeight:'700'}}>
                  {item.brand}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{color:'silver'}}>
              {item.description}
          </Typography>
          <div style={{display:'flex', justifyContent:'space-around'}}>
              <Typography style={{color:'blue', fontWeight:'600', fontSize:'16px'}}>
                  {`${item.price}/-`}
              </Typography>
              <Typography style={{textDecoration:'line-Through', color:'#878787'}}>
                  {`${item.strikeOff_price}/-`}
              </Typography>
              <Typography style={{color:'#388e3c'}}>
                  {`${item.offer}% Off`}
              </Typography>
            </div>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=>{handleClick(item)}}>View</Button>
                <Button size="small">Add to Cart</Button>
              </CardActions>
            </Card>
          </ImageListItem>
        ))}
      </ImageList>
      <Stack spacing={1}>
        <Pagination
          style={{ margin: "auto", padding: "20px" }}
          defaultPage={1}
          count={Math.ceil(pageNumber / limit)}
          color="secondary"
          onChange={(e, d) => {
            if (gender === "all") {
              axios
                .get(`http://localhost:3002/fashion?_page=${d}&_limit=${limit}`)
                .then(({ data }) => {
                  setData(data);
                });
            } else {
              axios
                .get(
                  `http://localhost:3002/fashion?_page=${d}&_limit=${limit}&gender=${gender}`
                )
                .then(({ data }) => {
                  setData(data);
                });
            }
          }}
        />
      </Stack>
    </>
  );
}
