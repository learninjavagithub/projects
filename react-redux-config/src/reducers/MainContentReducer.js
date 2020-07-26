import { combineReducers } from "redux";
import UserReducer from "./UserReducer";

const MainContentReducer = combineReducers({
  user: UserReducer
});

export default MainContentReducer;
