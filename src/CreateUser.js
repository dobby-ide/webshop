import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { useAsync } from 'react-async';
import user3 from "./img/user3.jpg";
import username from "./img/username.jpg";
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

const url = "http://localhost:3020/user";

// Post user data to json-server
const postAccount = async (email, fname, lname, pw) => {
    let resp = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            email: email,
            firstname: fname,
            lastname: lname,
            password: pw
        })
    });
    if (resp.status === "201") return true;
    return false;
};

// CreateUser component shows the form for registering a user account
function CreateUser() {
  const [regSuccess, setRegSuccess ] = useState(false);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    let { email, fname, lname, pass } = document.forms.register;
    postAccount(email.value, fname.value, lname.value, pass.value)
        .then(() => setRegSuccess(true))
        .catch(() => console.log("Fail."));
  };

  const successUI = (
    <div>
      <div className='register-logo'>
        <div className='register-container'>
          <img className='register-profile' src={username}></img>
            </div>
      </div>
      <div>
              <h1>Welcome shopping!</h1>
              <div>Your account was registered succesfully. </div>
            </div>
      </div>
  );

  // JSX code for login form
  const registerForm = (
    <div>
      <div className='register-logo'>
        <div className='register-container'>
          <img className='register-profile' src={username}></img>
            </div>
      </div>
      <div>
              <h1>Registration Page </h1>
              <form name="register" onSubmit={handleSubmit}>
                <div className="input-container">
                  <img className="email" src={username} alt="username" />
                  <Input type="text" name="fname" placeholder="First Name" className="name" required />
                </div>
                <div className="input-container">
                  <img className="email" src={username} alt="username" />
                  <Input type="text" name="lname" placeholder="Last Name" className="name" required />
                </div>
                <div className="input-container">
                  <img src={username} alt="email" className="email"/>
                  <Input type="password" name="pass" placeholder="Password" className="name" required />
                </div>
                <div className="input-container">
                  <img src={username} alt="email" className="email"/> 
                  <Input type="text" name="email" placeholder="Email address" className="name" required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />

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
        { regSuccess ? successUI : registerForm }
        </div>
    </div>
  );
}

export default CreateUser;
