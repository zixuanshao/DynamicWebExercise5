import React from "react";
import CreateAccount from '../../components/CreateAccount/index';

export default function Signup({signupFunction}){
    return (
        <div>
            <h1>Sign Up</h1>
            <CreateAccount submitFunction={signupFunction} />
        </div>
    )
}
