import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { useAsync } from 'react-async';

const url = "http://localhost:3020/user?name=";

// Get user data from server
// Client-side auth is a big NO-NO, but it works for our project
const getCredentials = async (name) => {
    let resp = await fetch(url + name, { method: 'GET' });
    let data = await resp.json();
    return data;
};

// Login component displays login UI and authenticates from json-server
function Login(props) {
  const [user, setUser] = useState("");

  const handleLogin = (event) => {
    //Prevent page reload
    event.preventDefault();

    let { uname, pass } = document.forms.login;
    uname.className = pass.className = "";
    getCredentials(uname.value)
        .then(creds => {
            if (creds.length === 0) uname.className += "login-error";
            else if (creds[0].password !== pass.value) pass.className += "login-error";
            else setUser(creds[0].name);
        });
  };

  const handleLogout = (event) => {
    event.preventDefault();
    setUser("");
    props.setToggle(false);
  };

  // JSX code for login form
  const loginForm = (
    <div style={props.style}>
      <form name="login" onSubmit={handleLogin}>
        <div className="input-container">
          <input type="text" name="uname" placeholder="Username" required />
        </div>
        <div className="input-container">
          <input type="password" name="pass" placeholder="Password" required />
        </div>
        <div className="button-container">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );

  const logoutForm = (
    <div className="form">
      <form name="logout" onSubmit={handleLogout}>
        <div className="input-container">
          Logged in as {user}
          <input type="submit" value="Log out" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="login-ui">
        { user === "" ? loginForm : logoutForm }
    </div>
  );
}

export default Login;
