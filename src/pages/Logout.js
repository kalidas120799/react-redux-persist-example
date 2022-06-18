import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../actions";

export default function Logout() {
    const navigate = useNavigate();
    const logoutDispatch = useDispatch();

    const { isLogin } = useSelector(state => state.user);

    useEffect(() => {
        logoutDispatch(userLogout());
    }, []);

    useEffect(() => {
        if (!isLogin) navigate("/login");
    }, [isLogin]);

    return (
        <div>Logout</div>
    );
}
