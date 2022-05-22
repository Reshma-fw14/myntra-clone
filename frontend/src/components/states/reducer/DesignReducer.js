export const DesignReducer = (state = {men:false,women:false,girl:false}, action) => {
  
    if (action.type == "DESIGN") {
      return action.payload;
      
    }
    else return state;
  };