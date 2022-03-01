import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import '../App.css';
import styled from 'styled-components';

import { Badge } from '@material-ui/core';
import Login from '../Login';

const Input = styled.input`
  border: none;
  width: 100%;
`;

function Navbar() {
  const [toggle, setToggle] = React.useState(false);

  return <div className="nav-container"></div>;
}

export default Navbar;
