export const ImageReducer = (state = {images:[]}, action) => {
    // console.log("action: ", action.payload);
    if (action.type == "IMAGES") {
      console.log("hi",action.payload)
      return action.payload;
      
    }
    else return state;
  };
  