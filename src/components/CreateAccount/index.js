import React from "react";

export default function CreateAccount({submitFunction}){
    return <div>
        <form onSubmit={e => submitFunction(e)}>
            <label htmlFor="createEmail"> Email </label>
            <input type="email" name="createEmail" placeholder="email" />
            <label htmlFor="createPassword"> Password </label>
            <input type="password" name="createPassword" placeholder="password" />
            <button>Create Account</button>
        </form>

    </div>
}