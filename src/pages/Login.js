import React, { useEffect, useState } from 'react';
import { Button, Container, Stack, TextField } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../actions";

export default function Login() {
    const navigate = useNavigate();
    const loginDispatch = useDispatch();

    const { isLogin } = useSelector(state => state.user);
    const [users] = useState({
        email: 'demouser@gmail.com',
        password: 'demouser@gmail.com'
    });

    useEffect(() => {
        if (isLogin) navigate("/");
    }, [isLogin]);

    const Login = () => {
        loginDispatch(login(users));
    };

    return (
        <Container>
            <Stack>
                <TextField id="email" sx={{ mt: 3 }} label="email" type="text" value={users.email} variant="outlined" />
                <TextField id="password" sx={{ mt: 3 }} label="password" type="password" value={users.password} variant="outlined" />
                <Button variant="contained" sx={{ mt: 3 }} onClick={() => Login()} >Login</Button>
            </Stack>
        </Container>
    );
}
