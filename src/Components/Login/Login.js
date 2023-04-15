import React from 'react';

import "./Login.css";

function Login(props) {
    return (
        <div className="login">
        <button onClick={props.onClick}>Login to Spotify</button>
        </div>
    )
}

export default Login;