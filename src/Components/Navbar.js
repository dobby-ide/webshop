import { Search } from '@material-ui/icons';
import React from 'react';
import '../App.css';
import styled from "styled-components";

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
                <Search/>
                </div></div>
            <div className='nav-right'>
                <div className='nav-menu'>
                    Home
                </div>
                <div className='nav-menu'>
                    Categories
                </div>
                <div className='nav-menu'>
                    Contact
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar