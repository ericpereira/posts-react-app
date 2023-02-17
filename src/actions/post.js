import { SET_POSTS } from "./types.js"
import PostService from "../services/post.service"

export const setPosts = () => (dispatch) => {
  return PostService.getAllPosts().then(
    (data) => {
      dispatch({
        type: SET_POSTS,
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

export const insertPost = (title, description) => (dispatch) => {
  return PostService.registerPost(title, description).then(
    (data) => {
      dispatch(setPosts()); //after insert a new post, reload the post list
      return Promise.resolve();
    },
    (error) => {
      //do something if had error when try to retrieve posts

      return Promise.reject();
    }
  );
};

export const removePost = (id) => (dispatch) => {
  return PostService.deletePost(id).then(
    (data) => {
      dispatch(setPosts()); //after insert a new post, reload the post list
      return Promise.resolve();
    },
    (error) => {
      //do something if had error when try to retrieve posts

      return Promise.reject();
    }
  );
};