import { combineReducers } from "redux";
import { TypeReducer } from "./typeReducer";
import { ImageReducer } from "./ImageReducer";
import { CounterReducer } from "./CounterReducer";
import {ViewReducer} from "./ViewReducer";
import {CartReducer} from "./CartReducer";
import { DesignReducer } from "./DesignReducer";
import {BrandReducer} from "./BrandReducer";
import { TrackReducer } from "./TrackReducer";
import { LoginReducer } from "./LoginReducer";

export const Reducers = combineReducers({
  TypeReducer,
  ImageReducer,
  CounterReducer,
  ViewReducer,
  CartReducer,
  DesignReducer,
  BrandReducer,
  TrackReducer,
  LoginReducer
});
