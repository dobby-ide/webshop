import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { useAsync } from 'react-async';
import user3 from "./img/user3.jpg";
import username from "./img/username.jpg";
const url = "http://localhost:3020/user";

// Post user data to json-server
const postAccount = async (name, pw, email) => {
    let resp = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            name: name,
            password: pw,
            email: email
        })
    });
    if (resp.status === "201") return true;
    return false;
};

// CreateUser component shows the form for registering a user account
function CreateUser() {
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    let { uname, pass, email } = document.forms.register;
    postAccount(uname.value, pass.value, email.value)
        .then(() => console.log("Account created."))
        .catch(() => console.log("Fail."));
  };

  // JSX code for login form
  const registerForm = (
    <div>
      <div className='register-logo'>
        <div className='register-container'>
          <img className='register-profile' src={user3}></img>            
              
            </div>
            
      </div>
      <div>
              <h1>Registration Page </h1>
              <form name="register" onSubmit={handleSubmit}>
                <div className="input-container">
                  <img className="email" src={username} alt="username" />
                  <input type="text" name="uname" placeholder="Username" className="name" required />
                </div>
                <div className="input-container">
                  <img src={username} alt="email" className="email"/>
                  <input type="password" name="pass" placeholder="Password" className="name" required />
                </div>
                <div className="input-container">
                  <img src={username} alt="email" className="email"/> 
                  <input type="text" name="email" placeholder="Email address" className="name" required />
                </div>
                <div className="button-container">
                  <input type="submit" value="Create account" className="button-input" />
                </div>
              </form>
            </div>
    </div>
  );

  return (
    <div className="register-ui">
      <div className='sub-register'>
        { registerForm }
        </div>
    </div>
  );
}

export default CreateUser;
