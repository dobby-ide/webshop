import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import '../App.css';
import styled from "styled-components";

// import {faCoffee} from "@fortawesome/fontawesome-svg-core";

import { Badge } from '@material-ui/core';

const Input = styled.input`
 border: none;
 width:100%;
 `;

function Navbar() {
  return (
    <div className='nav-container'>
        <div className='nav-wrapper'>
            <div className='nav-left'><span><h1>CLOTHS.</h1></span></div>
            <div className='nav-center'><div className='search-container'>
                <Input placeholder='search'/>
                <Search style={{color:"gray",fontSize:16}}/>
                </div></div>
            <div className='nav-right'>
                <div className='nav-menu'>
                    REGISTER
                {/* <FontAwesomeIcon icon={faUser} /> */}
                </div>
                <div className='nav-menu'>
                    SIGN IN
                </div>
                <div className='nav-menu'>
                <Badge badgeContent={5} color="primary">
                    <ShoppingCartOutlined color="action" />
                    </Badge>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar