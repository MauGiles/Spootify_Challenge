import React from 'react';
import './login.css';
import { loginUrl } from '../spotify/spotify';

function Login() {
    return (
        <div className="login">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png" alt="" />
            <a href={loginUrl}>LOG IN</a>
        </div>
    );
}

export default Login;