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
function Login() {
  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user, setUser] = useState([]);

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    let { uname, pass } = document.forms.login;
    getCredentials(uname.value)
        .then(creds => {
            console.log(creds);
            if (creds.length === 0) console.log("User not found.");
            else if (creds[0].password === pass.value) console.log("User logged in");
            else console.log("Login failed.");
        });
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === error.name && (
      <div className="error">{error.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form name="login" onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="text" name="uname" placeholder="Username" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <input type="password" name="pass" placeholder="Password" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="login-ui">
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </div>
  );
}

export default Login;
