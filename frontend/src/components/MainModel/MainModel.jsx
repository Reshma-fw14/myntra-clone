import React from 'react';
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
import {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MainModel({api}) {
    console.log("props:",api)

    const limit = 10;
  const [data, setData]=useState([])
    const url = useSelector((state) => state.TypeReducer);
    const counter=useSelector((state)=>state.CountReducer)
    // console.log("url:",url.url)

    const { routeName } = useParams();
    console.log("router",routeName)
    const [n, setN] = React.useState(4);
  const isActive = useMediaQuery("(max-width:800px)");
  const [itemData, setitemData] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(10);

    useEffect(()=>{
       getData()
       getPage();
    },[counter])

    const getData=()=>{
      axios.get(`${url.url}`).then(({data})=>{
        // console.log(data)
        setData(data)
      })
    }
    // console.log("dataaaa:",data)

    function getPage() {
        axios.get(`${url.url}/?type=${routeName}`).then(({ data }) => {
          setPageNumber(data.length);
        });
      }


  return (
    <div>
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
              {/* <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Add to Cart</Button>
              </CardActions> */}
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
            if (routeName === "all") {
              axios
                .get(`http://localhost:3002/fashion?_page=${d}&_limit=${limit}`)
                .then(({ data }) => {
                  setData(data);
                });
            } else {
              axios
                .get(
                  `http://localhost:3002/fashion?_page=${d}&_limit=${limit}&type=${routeName}`
                )
                .then(({ data }) => {
                  setData(data);
                });
            }
          }}
        />
      </Stack>
    </div>
  )
}
