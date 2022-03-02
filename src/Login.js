import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { useAsync } from 'react-async';
import styled from "styled-components";

const Input = styled.input`
width: 350px;
height: 50px;
border-radius: 60px;
box-shadow: inset 0px 0px 25px 0px #888;
border: none;
outline: none;
background-color: #fff;
 `;

const url = "http://localhost:3020/user?email=";

// Get user data from server
// Client-side auth is a big NO-NO, but it works for our project
const getCredentials = async (email) => {
    let resp = await fetch(url + email, { method: 'GET' });
    let data = await resp.json();
    return data;
};

// Login component displays login UI and authenticates from json-server
function Login(props) {
  const handleLogin = (event) => {
    //Prevent page reload
    event.preventDefault();

    let { email, pass } = document.forms.login;
    email.className = pass.className = pass.className.replace(" login-error", "");
    getCredentials(email.value)
        .then(creds => {
            if (creds.length === 0) email.className += " login-error";
            else if (creds[0].password !== pass.value) pass.className += " login-error";
            else {
                props.setUser(creds[0].email);
                props.setLoginMode("logout-ui");
            }
        });
  };

  const handleLogout = (event) => {
    event.preventDefault();
    props.setUser("");
    props.setLoginMode("initial");
  };

  // JSX code for login form
  const loginForm = (
    <div style={props.style}>
      <h1>Login</h1>
      <form name="login" onSubmit={handleLogin}>
        <div className="input-container">
          <Input type="text" name="email" placeholder="Email" className="name" required />
        </div>
        <div className="input-container">
          <Input type="password" name="pass" placeholder="Password" className="name" required />
        </div>
        <div className="button-container">
          <input className="add_to_cart_btn" type="submit" value="Login" />
          <button className="add_to_cart_btn" onClick={() => props.setLoginMode("initial")}>Cancel</button>
        </div>
      </form>
    </div>
  );

  const logoutForm = (
    <div className="form">
      <form name="logout" onSubmit={handleLogout}>
        <div className="input-container">
          Logged in as {props.user}
          <input className="add_to_cart_btn" type="submit" value="Log out" />
        </div>
      </form>
    </div>
  );

  return (
    <div className={props.loginMode === "login-ui" ? "login-ui" : "hidden"}>
        { props.user === "" ? loginForm : logoutForm }
    </div>
  );
}

export default Login;
