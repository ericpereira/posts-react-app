import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5555";

const getAllPosts = () => {
    return axios.get(API_URL + '/posts', { headers: authHeader() });
}

const registerPost = (title, description) => {
    return axios.post(API_URL + '/posts', { title, description }, { headers: authHeader() });
}

const deletePost = (id) => {
    return axios.delete(API_URL + '/posts/' + id, { headers: authHeader() });
}

const PostService = {
    getAllPosts,
    registerPost,
    deletePost
}

export default PostService