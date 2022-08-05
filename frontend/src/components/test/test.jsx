import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import ImageListItem from "@mui/material/ImageListItem";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../states/store/ActionCreator";
import { useNavigate } from "react-router-dom";


export const TestMap=({data})=>{
    const nav = useNavigate()
    const dispatch=useDispatch();
    const action = bindActionCreators(ActionCreators,dispatch)
    
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

    return <>
     {data.map((item) => (
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
    </>
}