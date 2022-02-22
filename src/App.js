import React from 'react';
import './App.css';
import Products from './Products';
import { useState, useEffect } from 'react';
function App() {
  const [productsisVisible, setProductsIsVisible] = useState(true);
  const [womenClothingisVisible, setWomenClothingIsVisible] = useState(false);
  const [jewelryisVisible, setJewelryIsVisible] = useState(false);
  const [menClothingisVisible, setMenClothingIsVisible] = useState(false);
  const [electronicsisVisible, setElectronicsIsVisible] = useState(false);
  return (
    <div className="container">
      <Products />
    </div>
  );
}

export default App;
