import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import '../App.css';
import styled from "styled-components";
import { Badge } from '@material-ui/core';
import Login from '../Login';
import CreateUser from "../CreateUser";
import ShoppingCart from "../ShoppingCart";
import App from "../App";

const Input = styled.input`
 border: none;
 width:100%;
 `;

function Navbar() {
  const [loginMode, setLoginMode] = React.useState("initial");
  const [user, setUser] = useState("");

  return (
    <div className='nav-container'>
        <BrowserRouter>
        <div className='nav-wrapper'>
            <div className='nav-left'><h1><Link to="/" style={{textDecoration:'none',color:"black"}}>CLOTHS.</Link></h1></div>
            <div className='nav-center'><div className='search-container'>
                <Input placeholder='search'/>
                <Search style={{color:"gray",fontSize:16}}/>
                </div></div>
            <div className='nav-right'>
                <div className='nav-menu'>
                    <Link to="/user" style={{textDecoration:'none',color:"black"}}>
                    REGISTER
                    </Link>
                {/* <FontAwesomeIcon icon={faUser} /> */}
                </div>
                <div className='nav-menu'>
                    <button className="add_to_cart_btn" onClick={() => setLoginMode("login-ui")}
                        disabled={loginMode === "login-ui" ? "disabled" : ""}>{user === "" ? "SIGN IN" : user}</button>
                    <Login className={loginMode === "login-ui" ? "login_form" : "hidden"}
                        user={user} setUser={setUser} loginMode={loginMode} setLoginMode={setLoginMode} />
                </div>
                <div className='nav-menu'>
                    <Link to="/cart" style={{textDecoration:'none',color:"black"}}>
                        <Badge badgeContent={5} color="primary">
                        <ShoppingCartOutlined color="action" />
                        </Badge>
                    </Link>
                </div>
            </div>
        </div>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="cart/*" element={<ShoppingCart/>} />
            <Route path="user/*" element={<CreateUser/>} />
        </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default Navbar
