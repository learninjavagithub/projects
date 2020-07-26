import { combineReducers } from "redux";
import MainContentReducer from "./MainContentReducer";

const RootReducer = combineReducers({
  main: MainContentReducer
});

export default RootReducer;
