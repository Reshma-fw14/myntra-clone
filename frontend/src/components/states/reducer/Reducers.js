import { combineReducers } from "redux";
import { TypeReducer } from "./typeReducer";
import { ImageReducer } from "./ImageReducer";
import { CounterReducer } from "./CounterReducer";

export const Reducers = combineReducers({
  TypeReducer,
  ImageReducer,
  CounterReducer
});
