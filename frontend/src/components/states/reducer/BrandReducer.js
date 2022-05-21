export const BrandReducer = (state = "https://myntra-application.herokuapp.com/fashion", action) => {
    // console.log("action: ", action.payload);
    if (action.type == "BRAND") return action.payload;
    else return state;
  };