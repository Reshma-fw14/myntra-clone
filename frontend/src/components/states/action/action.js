const typeAction = "TYPE";
const images = "IMAGES";
const counter = "COUNTER";
const view = "VIEW";
const cart = "CART";
const design = "DESIGN";
const brand = "BRAND";
const track = "TRACK";

export const LoginAction = (loginData) => {
  return (dispatch) => {
    dispatch({
      type: "LOGIN",
      payload: loginData,
    });
  };
};

export const Track = (x) => {
  return (dispatch) => {
    dispatch({
      type: track,
      payload: x,
    });
  };
};

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
export const RemaoveAction = (x) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVECART",
      payload: x,
    });
  };
};
