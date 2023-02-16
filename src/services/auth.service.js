import axios from "axios";

const API_URL = "http://localhost:5555/";

const register = (name, email, password) => {
  return axios.post(API_URL, {
    name,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "users/auth", {
      email,
      password,
    })
    .then((response) => {
        console.log('response', response)
        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};