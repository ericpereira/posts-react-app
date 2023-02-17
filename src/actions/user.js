import { SET_USERS } from "./types.js"
import UserService from "../services/user.service"

export const setUsers = () => (dispatch) => {
    return UserService.getAllUsers().then(
      (data) => {
        dispatch({
          type: SET_USERS,
          payload: data,
        });
  
        return Promise.resolve();
      },
      (error) => {
        //do something if had error when try to retrieve posts
  
        return Promise.reject();
      }
    );
  };