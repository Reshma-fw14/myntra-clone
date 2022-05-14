import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Products.css";
import CarouselModel from "../Carousel/Carousel";
import Filter from "../FilterCard/Filter";
import { useEffect } from "react";

import { bindActionCreators } from "redux";
import { ActionCreators } from "../states/store/ActionCreator";
import { useDispatch } from "react-redux";

export default function Products() {
  const limit = 10;
  const url = useSelector((state) => state.TypeReducer);
  const counter=useSelector((state)=>state.CounterReducer)
  // console.log(counter)
  
  const nav = useNavigate()
 

  const { routeName } = useParams();

  const isActive = useMediaQuery("(max-width:800px)");
  const [itemData, setitemData] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(10);

  useEffect(()=>{
    getAll();
    getPage();
  },[counter])


  function getAll() {
    if (routeName === "all") {
      axios.get(`${url.url}/?_page=1&_limit=${limit}`).then(({ data }) => {
        // console.log("data,",data)
        setitemData(data);
      });
    } else {
      axios
        .get(`${url.url}/?_page=1&_limit=${limit}&type=${routeName}`)
        .then(({ data }) => {
          setitemData(data);
        });
    }
  }
  // console.log(itemData);
  // console.log(`${url.url}/?_page=1&_limit=${limit}&type=${routeName}`);
  // console.log(`${url.url}/?_page=1&_limit=${limit}`)
  
  function getPage() {
    axios.get();
    if (routeName == "all") {
      axios.get(`${url.url}`).then(({ data }) => {
        setPageNumber(data.length);
      });
    } else {
      axios.get(`${url.url}/?type=${routeName}`).then(({ data }) => {
        setPageNumber(data.length);
      });
    }
  }

  const img=["https://assets.ajio.com/cms/AJIO/WEB/12052022-D-unisex-topbannercarousel-p3-ethnicwear-brands-4070.jpg",
              "https://assets.ajio.com/cms/AJIO/WEB/12052022-D-KHP-topbanner-ajiomaniaprebuzz-5090.jpg",
              "https://assets.ajio.com/cms/AJIO/WEB/12052022-D-MHP-topbannercarousel-p2-categorydays-shirts&tshirts-min50.jpg"
            ]

  const dispatch = useDispatch();
  const action = bindActionCreators(ActionCreators, dispatch);

  const handleClick=(singleItem)=>{
    // console.log("singleItem",singleItem)
    action.TypeAction({ url: singleItem });
    nav(`/ProductView/${singleItem.id}`)
  }
 

  return (
    <>
    <h1>Best of All Brands</h1>
    <CarouselModel img={img}/><br /><br />

    <Filter/>


    <h1 style={{textAlign:'center', color:'silver'}}>Choose Your Favorite</h1>
      <ImageList
        className="container_user_listing"
        sx={{ width: "80%", height: "90%" }}
        variant="woven"
        cols={isActive ? 2 : 5}
        gap={8}
      >
        {itemData.map((item) => (
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
                <Button size="small" onClick={()=>{handleClick(item)}} >View</Button>
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
            if (routeName === "all") {
              axios
                .get(`http://localhost:3002/fashion?_page=${d}&_limit=${limit}`)
                .then(({ data }) => {
                  setitemData(data);
                });
            } else {
              axios
                .get(
                  `http://localhost:3002/fashion?_page=${d}&_limit=${limit}&type=${routeName}`
                )
                .then(({ data }) => {
                  setitemData(data);
                });
            }
          }}
        />
      </Stack>
    </>
  );
}
