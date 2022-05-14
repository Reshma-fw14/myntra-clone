const typeAction = "TYPE";
const images='IMAGES';
const counter="COUNTER";

export const TypeAction = (x) => {
  return (dispatch) => {
    dispatch({
      type: typeAction,
      payload: x,
    });
  };
};

export const ImageAction = (x) => {
  return (dispatch) => {
    dispatch({
      type: images,
      payload: x,
    });
  };
};

export const CounterAction = (x) => {
  return (dispatch) => {
    dispatch({
      type: counter,
      payload: x,
    });
  };
};


