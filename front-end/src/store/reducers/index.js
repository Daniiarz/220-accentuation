import { combineReducers } from "redux";
import verifyAuth from "./veryfiAuth";
import login from "./login";
import regis from "./regis";
import profileReducer from "./profileReducer";

export default combineReducers({
  verifyAuth, login, regis, profileReducer
});
