import { Reducers } from "./Reducers";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"

export const store = createStore(Reducers, {}, applyMiddleware(thunk))