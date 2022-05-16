const typeAction = "TYPE";
const images='IMAGES';
const counter="COUNTER";
const view="VIEW";
const cart="CART";
const design="DESIGN";
const brand="BRAND"

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

export const DesignAction = (x) => {
  return (dispatch) => {
    dispatch({
      type: design,
      payload: x,
    });
  };
};

export const BrandAction = (x) => {
  return (dispatch) => {
    dispatch({
      type: brand,
      payload: x,
    });
  };
};