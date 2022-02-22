import React from 'react';
import './App.css';
import { useAsync } from 'react-async';

// Then we'll fetch user data from this API
const loadUsers = async () =>
  await fetch('https://fakestoreapi.com/products')
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());

// Our component
function Products() {
  const { data, error, isLoading } = useAsync({ promiseFn: loadUsers });
  //For saving in cart.json file
  function saveToCart(products){
    
  }
  if (isLoading) return 'Loading...';
  if (error) return `Something went wrong: ${error.message}`;
  if (data)
    // The rendered component
    return (
      <div className="container">
        <div>
          <h2>products</h2>
        </div>
        {data.map((products) => (
          <div key={products.id} className="row">
            <div className="col-md-12">
              <p>{products.title}</p>
              <p>{products.price}</p>
              <p><button onClick={()=>saveToCart(products)}>Add To Cart</button></p>
              <img src={products.image} className="products_img" />
            </div>
          </div>
        ))}
      </div>
    );
}

export default Products;
