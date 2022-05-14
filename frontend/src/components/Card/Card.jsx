import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../states/store/ActionCreator";
import { useDispatch } from "react-redux";

export const CardModel = ({ data }) => {
  const nav=useNavigate()
  // console.log("data",data)

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
      <Card sx={{ minWidth: 245 }} elevation={5}>
        <CardContent>
          <img
            src={data.image[0]}
            alt={data.brand}
            style={{ width: "100%", borderRadius: 8 ,height:'350px', marginBottom:'10px'}}
          />
          <Typography variant="body2" color="text.secondary" style={{marginBottom:'10px', color:'black', fontWeight:'600'}}>
            {data.brand}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
             {data.description}
          </Typography> */}
          <div style={{display:'flex', justifyContent:'space-around'}}>
              <Typography style={{color:'#212121', fontWeight:'600', fontSize:'16px'}}>
                  {`${data.price}/-`}
              </Typography>
              <Typography style={{textDecoration:'line-Through', color:'#878787'}}>
                  {`${data.strikeOff_price}/-`}
              </Typography>
              <Typography style={{color:'#388e3c'}}>
                  {`${data.offer}% Off`}
              </Typography>
            </div>
          <CardActions style={{ display: "flex", justifyContent:"space-between"}}>
            <Button size="small" style={{color:"#ff3e6c", fontWeight:'600'}} onClick={()=>{
              handleCart(data)
            }}>Add Cart</Button>

            <Button size="small" style={{color:"#ff3e6c",fontWeight:'600'}} onClick={()=>{
                  handleClick(data)
            }}>View</Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};
