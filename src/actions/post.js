import { SET_COMMENTS, SET_POSTS } from "./types.js"
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

export const likePost = (id) => (dispatch) => {
  return PostService.likePost(id).then(
    (data) => {
      dispatch(setPosts()); //after like a post, reload the post list
      return Promise.resolve();
    },
    (error) => {
      //do something if had error when try to retrieve posts

      return Promise.reject();
    }
  );
};

export const unlikePost = (id) => (dispatch) => {
  return PostService.unlikePost(id).then(
    (data) => {
      dispatch(setPosts()); //after like a post, reload the post list
      return Promise.resolve();
    },
    (error) => {
      //do something if had error when try to retrieve posts

      return Promise.reject();
    }
  );
};

export const getCommentsPost = (id) => (dispatch) => {
  return PostService.getCommentsPost(id).then(
    (data) => {
      dispatch({
        type: SET_COMMENTS,
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

export const registerComment = (id, description) => (dispatch) => {
  return PostService.registerComment(id, description).then(
    (data) => {
      //maybe this is unnecessary for now
      //dispatch(setPosts()); //after like a post, reload the post list for update the comment post counter
      dispatch(getCommentsPost(id)); //after insert a new comment, reload the commentsPost list
      return Promise.resolve();
    },
    (error) => {
      //do something if had error when try to retrieve comments

      return Promise.reject();
    }
  );
};