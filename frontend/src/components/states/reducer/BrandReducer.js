export const BrandReducer = (state = "", action) => {
    // console.log("action: ", action.payload);
    if (action.type == "BRAND") return action.payload;
    else return state;
  };