export const CartReducer = (
  state = { actualPrice: 0, discount: 0, finalPrice: 0, cartEle: [] },
  action
) => {
  //console.log("cation in cart ", action);
  if (action.type == "CART") {
    let tem = [...state.cartEle, action.payload.item];
    state.cartEle = [...tem];
    state.actualPrice = ActualPriceSum(state.cartEle);
    let total = DiscountedPriceFunction(state.cartEle);
    state.discount = state.actualPrice - total;
    state.finalPrice = total;

    return state;
  } else if (action.type === "REMOVECART") {
    state.cartEle.splice(action.payload, 1);
    let arr=[...state.cartEle]
    //console.log(arr)
    if (arr.length === 0)
      return { actualPrice: 0, discount: 0, finalPrice: 0, cartEle: [] };
    
      let ActualPrice=ActualPriceSum(arr)
      let Total=DiscountedPriceFunction(arr);
    let Discount =ActualPrice - Total;
    return { actualPrice: ActualPrice, discount: Discount, finalPrice: Total, cartEle: [...arr] }
  } else return state;
};

function ActualPriceSum(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    let num = toNum(arr[i].strikeOff_price);
    sum += num;
  }
  return sum;
}

function toNum(str) {
  str = str.trim().split(",").join("");
  return +str;
}

function DiscountedPriceFunction(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += +arr[i].price;
  }
  return sum;
}
