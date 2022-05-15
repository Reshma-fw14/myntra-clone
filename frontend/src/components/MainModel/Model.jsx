import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
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
import { useParams, useNavigate } from "react-router-dom";

import FilterCard from "../Card/FilterCard";
import CarouselModel from "../Carousel/Carousel";
import Filter from "../FilterCard/Filter";

import { bindActionCreators } from "redux";
import { ActionCreators } from "../states/store/ActionCreator";
import { useDispatch,useSelector } from "react-redux";
import Design from "../CatModels/WomenDesign";
import MenDesign from "../CatModels/MenDesign";
import KidsDesign from "../CatModels/KidsDesign";

export default function Model() {
  const nav = useNavigate();
  const limit = 10;
  const [data, setData] = useState([]);
  const url = useSelector((state) => state.TypeReducer);
  const counter = useSelector((state) => state.CounterReducer);
  const {men,women,girl}=useSelector((state)=>state.DesignReducer)
  // console.log("url:",url.url)

  const { gender } = useParams();

  const isActive = useMediaQuery("(max-width:800px)");
  const [pageNumber, setPageNumber] = React.useState(10);

  useEffect(() => {
    getData();
    getPage();
  }, [counter]);

  const getData = () => {
    axios
      .get(`${url.url}/?gender=${gender}&_page=1&_limit=${limit}`)
      .then(({ data }) => {
        // console.log(data)
        setData(data);
      });
  };

  function getPage() {
    axios.get(`${url.url}/?gender=${gender}`).then(({ data }) => {
      setPageNumber(data.length);
    });
  }

  const dispatch = useDispatch();
  const action = bindActionCreators(ActionCreators, dispatch);

  const handleClick=(singleItem)=>{
    // console.log("item",singleItem.id)
    action.ViewAction({ item : singleItem });
    nav(`/ProductView/${singleItem.id}`)
  }

  const handleCart=(item)=>{
    // console.log("cart",cartItem);
    action.CartAction({item})
    nav(`/cart/${item.id}`)
  }


  return (
    <>
      {women && <Design />}
      {men && <MenDesign/>}
      {girl && <KidsDesign/>}
      

     <div>
       <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/f4b10903-d18d-44fa-8dc9-b49e7e86ae521651897264790-Shop-By-Category.jpg" alt="" />
     </div>
      <Filter />
      
      <div>
        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/ba07b5b3-ad1f-4800-8968-4b1bc000be191651897264745-Budget-Buys.jpg" alt="" />
      </div>
      <ImageList
        className="container_user_listing"
        sx={{ width: "80%", height: "90%" }}
        variant="woven"
        cols={isActive ? 2 : 5}
        gap={8}
      >
        {data.map((item) => (
          <ImageListItem key={item.id}>
            <Card sx={{ maxWidth: 245, marginBottom: 9 }}>
              {/* <CardMedia
                component="img"
                image={item.image[0]}
                alt="green iguana"
              /> */}
              <CardContent>
                <img
                  style={{ height: "300px", width: "100%", marginBottom:'10px' }}
                  src={item.image[0]}
                  alt=""
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{marginBottom:'10px', color:'black', fontWeight:'600'}}
                >
                  {item.brand}
                </Typography>
                {/* <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ color: "silver" }}
                >
                  {item.description}
                </Typography> */}
                <div
                   style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Typography
                    style={{
                      color: "black",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    {`${item.price}/-`}
                  </Typography>
                  <Typography
                    style={{ textDecoration: "line-Through", color: "#878787" }}
                  >
                    {`${item.strikeOff_price}/-`}
                  </Typography>
                  <Typography style={{ color: "#388e3c" }}>
                    {`${item.offer}% Off`}
                  </Typography>
                </div>
              </CardContent>
              <CardActions style={{ display: "flex", justifyContent:"space-between"}}>
                <Button
                  size="small"
                  onClick={() => {
                    handleClick(item);
                  }}
                  style={{color:"#ff3e6c", fontWeight:'600'}}
                >
                  View
                </Button>
                <Button size="small" style={{color:"#ff3e6c", fontWeight:'600'}} onClick={()=>{
                  handleCart(item)
                }}>Add to Cart</Button>
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
