import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_BASE_URL;

const getAllPosts = () => {
    return axios.get(API_URL + '/posts', { headers: authHeader() });
}

const registerPost = (title, description) => {
    return axios.post(API_URL + '/posts', { title, description }, { headers: authHeader() });
}

const likePost = (id) => {
    return axios.post(API_URL + '/posts/' + id + '/like', {}, { headers: authHeader() });
}

const unlikePost = (id) => {
    return axios.post(API_URL + '/posts/' + id + '/unlike', {}, { headers: authHeader() });
}

const getCommentsPost = (id) => {
    return axios.get(API_URL + '/comments/' + id, { headers: authHeader() });
}

const registerComment = (id, description) => {
    return axios.post(API_URL + '/comments/' + id, { description }, { headers: authHeader() });
}

const deletePost = (id) => {
    return axios.delete(API_URL + '/posts/' + id, { headers: authHeader() });
}

const deleteComment = (id) => {
    return axios.post(API_URL + '/comments/' + id + '/remove', {}, { headers: authHeader() });
}

const updatePost = (id, data) => {
    return axios.patch(API_URL + '/posts/' + id, {...data}, { headers: authHeader() });
}

const updateComment = (id, data) => {
    return axios.patch(API_URL + '/comments/' + id, {...data}, { headers: authHeader() });
}

const PostService = {
    getAllPosts,
    registerPost,
    updatePost,
    likePost,
    unlikePost,    
    deletePost,
    getCommentsPost,
    registerComment,
    updateComment,
    deleteComment
}

export default PostService