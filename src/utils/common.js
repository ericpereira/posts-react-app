import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";

export function getCurrentUser() {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user && user.token) {
        return jwt_decode(user.token);
    } else {
        return {};
    }
}

export function useGetUser(user_id) {
    const users = useSelector(state => state.user.users)
    const user = users?.filter(s => s.id === user_id)[0]
    return user
}