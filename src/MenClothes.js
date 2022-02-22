import React from "react";
import "./App.css";

import { useState, useEffect } from "react";


function MenClothes() {

  const [womenCat, setWomenCat] = useState([]);

useEffect(()=>{
  loadProducts();
},[]);

 const loadProducts = async () =>{
  const res=  await fetch("https://fakestoreapi.com/products");
   const jsonData=await res.json();
   
   let t=[];
    for (let i = 0; i < jsonData.length; i++) {
       if (jsonData[i].category === "men's clothing") {
       
         t.push(jsonData[i]);
       
        //t is now an array of women's clothing
        
        
       }}
setWomenCat(t);
   
  
  
  }

      
      // 
         // return res[i];
  
  

  
  
    // The rendered component
  return (
    <div className="container">
      <div>
        <h2>products</h2>
      </div>
      {womenCat.map((products) => (
        <div key={products.id} className="row">
          <div className="col-md-12">
            <p>{products.title}</p>
            <p>{products.price}</p>
            <img src={products.image} className="products_img" />
          </div>
        </div>
      ))}
    </div>
  );}

export default MenClothes;
