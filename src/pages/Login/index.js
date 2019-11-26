import React from "react";
import LoginForm from '../../components/LoginForm/index';

export default function Login(){
    function submitFunction(e){
        console.log(e);
    }

    return (
        <div>
            <div>Login</div>
            <LoginForm submitFunction={submitFunction} />
        </div>
    )
}