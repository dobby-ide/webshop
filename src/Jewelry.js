import React from 'react';
import './App.css';

import { useState, useEffect } from 'react';

function Jewelry() {
  let jewelry = [];
  const [womenCat, setWomenCat] = useState([]);
    const [cart, setCart] = useState([]);
  const url = "http://localhost:3010/cart"
  //For saving in cart.json file
  function saveToCart(products){
    const options = {method:'POST',
                    headers:{'Content-type':'application/json'},
                    body:JSON.stringify({id:products.id, title:products.title, price:products.price, description:products.description, category:products.category} )
                   
                    }
  fetch(url, options)
    .then(response=>response.json())
    .then(data=>{
      console.log(data.id + "Added successfully");
       setCart([...cart, data.id]);
    })
  }
  //Fetches product in the cart
    const getCart = () =>{
    fetch(url)
    .then(response => response.json())   
    .then((cartList)=>setCart(cartList.map(item=>item.id)))    
    
  }
  useEffect(()=>{getCart()}, [true]);
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const jsonData = await res.json();

    let t = [];
    for (let i = 0; i < jsonData.length; i++) {
      if (jsonData[i].category === 'jewelery') {
        t.push(jsonData[i]);

        //t is now an array of women's clothing
      }
    }
    setWomenCat(t);
  };
  jewelry.push(...womenCat);

  function sortingByPrice() {
    let sortedArray = jewelry.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );

    setWomenCat(sortedArray);
    console.log(womenCat);
  }

  // The rendered component
  return (
    <div className="container">
      <div>
        <h2>products</h2>
        <button onClick={sortingByPrice}>filter by price</button>
      </div>
      {womenCat.map((products) => (
        <div key={products.id} className="row">
          <div className="col-md-12">
            <p>{products.title}</p>
            <p>{products.price}</p>
            <p><button disabled={cart.some(cartId => cartId===products.id)} onClick={()=>saveToCart(products)}>Add To Cart</button></p>
            <img src={products.image} className="products_img" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Jewelry;
