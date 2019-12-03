import React from "react";
import LoginForm from '../../components/LoginForm/index';

export default function Login({loginFunction}){
    return (
        <div>
            <div>Login</div>
            <LoginForm submitFunction={loginFunction} />
        </div>
    )
}