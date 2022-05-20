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
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Products.css";
import CarouselModel from "../Carousel/Carousel";
import Filter from "../FilterCard/Filter";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../states/store/ActionCreator";
import { useDispatch } from "react-redux";
import AddToCartButton from "../AddToCartButton"

export default function Products() {
   const brand=useSelector((state)=>state.BrandReducer);

  const limit = 10;

  const dispatch = useDispatch();
  const action = bindActionCreators(ActionCreators, dispatch);
  const url = useSelector((state) => state.TypeReducer);
  // console.log("URL", url);

  const counter = useSelector((state) => state.CounterReducer);
  const { routeName } = useParams();
  // console.log("routeName",routeName)

  const nav = useNavigate();

  const isActive = useMediaQuery("(max-width:800px)");
  const [itemData, setitemData] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(10);

  useEffect(() => {
    getAll();
    getPage();
    getBrand()
  }, [counter,setitemData]);

  function getAll() {
    if (routeName === "all") {
      axios.get(`${url.url}/?_page=1&_limit=${limit}`).then(({ data }) => {
        console.log("data all product",data.data)
        setitemData(data.data);
      });
    } else {
      axios
        .get(`${url.url}/?_page=1&_limit=${limit}&type=${routeName}`)
        .then(({ data }) => {
          setitemData(data.data);
        });
    }
  }

  function getPage() {
    if (routeName == "all") {
      axios.get(`${url.url}`).then(({ data }) => {
        setPageNumber(data.data.length);
      });
    } else {
      axios.get(`${url.url}/?type=${routeName}`).then(({ data }) => {
        setPageNumber(data.data.length);
      });
    }
  }

  const getBrand=()=>{
    axios.get(`${brand.url}/?brand=${routeName}`).then(({data})=>{
      // console.log("data::",data.data)
      setitemData(data.data);
    })
 }

  const img = [
    "https://assets.ajio.com/cms/AJIO/WEB/12052022-D-unisex-topbannercarousel-p3-ethnicwear-brands-4070.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/12052022-D-KHP-topbanner-ajiomaniaprebuzz-5090.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/12052022-D-MHP-topbannercarousel-p2-categorydays-shirts&tshirts-min50.jpg",
  ];

  const handleClick = (singleItem) => {
    // console.log("item",singleItem.id)
    action.ViewAction({ item: singleItem });
    nav(`/ProductView/${singleItem._id}`);
  };

  const handleCart = (item) => {
    // console.log("cart",cartItem);
    action.CartAction({ item });
    nav(`/cart/${item._id}`);
  };

  const handleSort=(x)=>{
    let sorted=itemData.sort((a,b)=>{
      if(x==1){
        return a.price-b.price
      }else{
        return b.price-a.price
      }
    })
    setitemData([...sorted])
  }
// console.log("itemData",itemData)


  return (
    <>
      <Filter />
  
      <div>
        <img
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/4f8a8f56-e3d2-4a91-830b-98c6e4069b461651897264784-Loving-These-Brands.jpg"
          alt=""
        />
      </div>
       <div style={{marginLeft:'1300px'}}>
       <button style={{border:'0', marginRight:'20px', padding:'5px 15px'}} onClick={()=>handleSort(1)}>Price Low to High</button>
       <button style={{border:'0',padding:'5px 15px'}} onClick={()=>handleSort(-1)}>Price High to Low</button>
       </div><hr />
      <ImageList
        className="container_user_listing"
        sx={{ width: "80%", height: "90%" }}
        variant="woven"
        cols={isActive ? 2 : 5}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item._id}>
            <Card
              onClick={() => {
                // handleClick(item);
              }}
              sx={{ maxWidth: 245, marginBottom: 9 }}
            >
              {/* <CardMedia
                component="img"
                image={item.image[0]}
                alt="green iguana"
              /> */}
              <CardContent>
                <img
                  style={{
                    height: "300px",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                  src={item.image[0]}
                  alt=""
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{
                    marginBottom: "10px",
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  {item.brand}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary" style={{color:'silver'}}>
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
              <CardActions
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button
                  style={{ color: "#ff3e6c", fontWeight: "600" }}
                  size="small"
                  onClick={() => {
                    handleClick(item);
                  }}
                >
                  View
                </Button>
                <Button
                  size="small"
                  style={{ color: "#ff3e6c", fontWeight: "600" }}
                  onClick={() => {
                    handleCart(item);
                  }}
                >
                  Add to Cart
                </Button>
                {/* <AddToCartButton/> */}
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
                .get(`https://myntra-application.herokuapp.com/fashion?_page=${d}&_limit=${limit}`)
                .then(({ data }) => {
                  setitemData(data.data);
                });
            } else {
              axios
                .get(
                  `https://myntra-application.herokuapp.com/fashion?_page=${d}&_limit=${limit}&type=${routeName}`
                )
                .then(({ data }) => {
                  setitemData(data.data);
                });
            }
          }}
        />
      </Stack>
    </>
  );
}
