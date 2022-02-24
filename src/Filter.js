import React from "react";
import { useAsync } from "react-async";
import {useState} from "react";
import "./App.css"

function Filter({
  changeWomenVisibility,
  changeJewelryVisibility,
  changeMenVisibility,
  changeElectronicsVisibility,
  changeToAllProductsVisibility,
}) {
  const onWomanClothesFilter = () => {
    changeWomenVisibility();
  };
  const onMenClothesFilter = () => {
    changeMenVisibility();
  };
  const onElectronicsFilter = () => {
    changeElectronicsVisibility();
  };
  const onJewelryFilter = () => {
    changeJewelryVisibility();
  };
  const onResettingToggles = () => {
    changeToAllProductsVisibility();
  };
  return (
    <div className="filter-container">
      <div>
        <button onClick={onResettingToggles}>All Products</button>
      </div>
      <div>
        <button onClick={onWomanClothesFilter}>Women Clothes</button>
      </div>
      <div>
        <button onClick={onMenClothesFilter}>Men Clothes</button>
      </div>
      <div>
        <button onClick={onJewelryFilter}>Jewelry</button>
      </div>
      <div>
        <button onClick={onElectronicsFilter}>Electronics</button>
      </div>
    </div>
  );
}
export default Filter;