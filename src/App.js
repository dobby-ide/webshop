import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Products from './Products';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Products />
    </div>
  );
}

export default App;
