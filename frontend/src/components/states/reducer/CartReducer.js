export const CartReducer = (state = {actualPrice:0,discount:0,finalPrice:0,cartEle:[]}, action) => {
    // console.log("action: ", action.payload);
    if (action.type == "CART"){
       {
let tem=[...state.cartEle,action.payload.item];
state.cartEle=[...tem];
state.actualPrice=ActualPriceSum(state.cartEle);
let total=DiscountedPriceFunction(state.cartEle)
state.discount=state.actualPrice-total;
state.finalPrice=total;

          
           return state;
       }
    } 
    else return state;
  };

  function ActualPriceSum(arr){
      let sum=0;
      for(var i=0;i<arr.length;i++) {
        //   console.log(arr[i])
          let num=toNum(arr[i].strikeOff_price)
          sum+=num;
      }
      return sum;
  }

  function toNum(str){
    //   console.log(str)
     str=str.trim().split(",").join("");
     return +str;
  }

  function DiscountedPriceFunction(arr){
      let sum=0;
      for(var i=0;i<arr.length;i++)
      {
          sum+=+arr[i].price;
      }
      return sum;
  }