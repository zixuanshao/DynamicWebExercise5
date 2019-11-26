import React from 'react';

export default function Header(){
    return(
        <header>
            <nav>
                <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/logout">Logout</a>
                <a href="/signup">Signup</a>
            </nav>
        </header>
    )
}