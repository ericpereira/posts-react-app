import React from 'react'
import { useDispatch } from "react-redux"
import { Navigate } from 'react-router-dom';
import { logout } from '../actions/auth';

const Logout = () => {
    const dispatch = useDispatch();

    dispatch(logout())
    return <Navigate to='/' />
}

export default Logout

