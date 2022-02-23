import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { useAsync } from 'react-async';

const login = async (name, pw) => {
    console.log("juu");
    fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({
            username: name,
            password: pw
        })
    })
    .then(res => res.json())
    .then(json => console.log(json + " jee"));
};

// Login component displays login UI and authenticates from json-server
function Login() {
  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms.login;
    //var form = document.fyyorms.login;
    login(uname.value, pass.value);

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
