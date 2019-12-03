import React from "react";
import LoginForm from '../../components/LoginForm/index';

export default function Login({loginFunction}){
    return (
        <div>
            <h1>Login</h1>
            <LoginForm submitFunction={loginFunction} />
        </div>
    )
}