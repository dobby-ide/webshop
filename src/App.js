import React from 'react';
import './App.css';
import { useAsync } from 'react-async';
import Products from './Products';
import Filter from './Filter';
import { useState, useEffect } from "react";
import WomenClothes from './WomenClothes';
import Jewelry from './Jewelry';
import MenClothes from './MenClothes';
import Electronics from './Electronics';



//useState to hide/show components

function App() {
  const [productsisVisible, setProductsIsVisible] = useState(true);
  const [womenClothingisVisible, setWomenClothingIsVisible] = useState(false);
  const [jewelryisVisible, setJewelryIsVisible] = useState(false);
   const [menClothingisVisible, setMenClothingIsVisible] = useState(false);
   const [electronicsisVisible, setElectronicsIsVisible] = useState(false);
 
 const onAllProductsVisibility=()=>{
    setProductsIsVisible(true);
    setWomenClothingIsVisible(false);
    setJewelryIsVisible(false);
    setMenClothingIsVisible(false);
    setElectronicsIsVisible(false);
 }
   const onWomenVisibility =()=>{
    setProductsIsVisible(false);
    setWomenClothingIsVisible(true);
    setJewelryIsVisible(false)
    setMenClothingIsVisible(false);
    setElectronicsIsVisible(false)
  }
  const onJewelryVisibility=()=>{
    setJewelryIsVisible(true);
    setElectronicsIsVisible(false)
    setProductsIsVisible(false);
    setWomenClothingIsVisible(false);
    setMenClothingIsVisible(false);
  }
  const onMenVisibility = () => {
    setElectronicsIsVisible(false);
    setMenClothingIsVisible(true);
    setJewelryIsVisible(false);
    setProductsIsVisible(false);
    setWomenClothingIsVisible(false);
  };
  const onElectronicsVisibilityy=()=>{
  setElectronicsIsVisible(true);
  setMenClothingIsVisible(false);
  setJewelryIsVisible(false);
  setProductsIsVisible(false);
  setWomenClothingIsVisible(false);
  }
  return (
    <div className="container">
      <Filter
        visibilityOnOff={productsisVisible}
        changeWomenVisibility={onWomenVisibility}
        changeJewelryVisibility={onJewelryVisibility}
        changeMenVisibility={onMenVisibility}
        changeElectronicsVisibility={onElectronicsVisibilityy}
        changeToAllProductsVisibility={onAllProductsVisibility}
      />
      {productsisVisible ? (
        <Products visibilityOnOff={productsisVisible} />
      ) : null}
      {womenClothingisVisible ? <WomenClothes /> : null}
      {jewelryisVisible ? <Jewelry /> : null}
      {menClothingisVisible ? <MenClothes /> : null}
      {electronicsisVisible ? <Electronics /> : null}
    </div>
  );
}

export default App;
