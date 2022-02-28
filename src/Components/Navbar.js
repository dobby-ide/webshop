import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import '../App.css';
import styled from "styled-components";
import { Link, BrowserRouter } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import Login from '../Login';

const Input = styled.input`
 border: none;
 width:100%;
 `;

function Navbar() {
  const [toggle, setToggle] = React.useState(false);

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
                    <span onClick={() => setToggle(!toggle)}>{toggle ? "" : "SIGN IN"}</span>
                    <Login style={toggle ? {display:"block"} : {display:"none"}} setToggle={setToggle} />
                </div>
                <div className='nav-menu'>
                <Badge badgeContent={5} color="primary">
                    <ShoppingCartOutlined color="action" />
                    </Badge>
                </div>
            </div>
        </div>
        </BrowserRouter>
        
    </div>
  )
}

export default Navbar
