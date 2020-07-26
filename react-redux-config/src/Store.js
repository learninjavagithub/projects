import RootReducer from "./reducers/RootReducer";
import ThunkMiddleware from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";

const middlewares = [ThunkMiddleware];
let enableReduxDevTools = true;
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = enableReduxDevTools
  ? createStore(RootReducer, storeEnhancers(applyMiddleware(...middlewares)))
  : createStore(RootReducer, applyMiddleware(...middlewares));

export default store;
