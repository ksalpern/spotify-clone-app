import React from "react";
import "./Login.css";
import { loginUrl } from './spotify';

function Login() {
  return (
    <div className="login">
      <img
        className="login__img"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      {/* Spotify logo */}

      <a className="login__link" href={loginUrl}>LOGIN WITH SPOTIFY</a>
      {/* Login with Spotify button */}
    </div>
  );
}

export default Login;
