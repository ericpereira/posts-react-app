import axios from "axios";

const API_URL = process.env.REACT_APP_BASE_URL;

const register = (name, email, password) => {
  return axios.post(API_URL + '/users', {
    name,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/users/auth", {
      email,
      password,
    })
    .then((response) => {
        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const UserService = {
  register,
  login,
  logout,
}

export default UserService