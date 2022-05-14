export const CounterReducer = (state = 0, action) => {
    // console.log("action: ", action.payload);
    if (action.type == "COUNTER"){
        state+=action.payload
        return  state;
    } 
    else return state;
  };