const typeAction = "TYPE";
const images='IMAGES';
const counter="COUNTER";
const view="VIEW";
const cart="CART";

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


export const ViewAction = (x) => {
  return (dispatch) => {
    dispatch({
      type: view,
      payload: x,
    });
  };
};

export const CartAction = (x) => {
  return (dispatch) => {
    dispatch({
      type: cart,
      payload: x,
    });
  };
};