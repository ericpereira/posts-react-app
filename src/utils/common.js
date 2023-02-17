import jwt_decode from "jwt-decode";

export default function getCurrentUser() {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user && user.token) {
        return jwt_decode(user.token);
    } else {
        return {};
    }
}