export const DesignReducer = (state = [], action) => {
    // console.log("action: ", action.payload);
    if (action.type == "DESIGN") {
      return action.payload;
      
    }
    else return state;
  };