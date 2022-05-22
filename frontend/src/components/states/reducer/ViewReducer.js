export const ViewReducer = (state = {}, action) => {
    // console.log("action: ", action.payload);
    if (action.type == "VIEW"){
        return  action.payload;
    } 
    else return state;
  };