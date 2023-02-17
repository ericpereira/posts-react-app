import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import post from "./post";
import user from "./user"

export default combineReducers({
  auth,
  message,
  post,
  user
});