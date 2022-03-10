import React, { useState, useEffect } from 'react';
import './App.css';
import { useAsync } from 'react-async';
import Card from './Card';
import SingleProduct from './SingleProduct';

// Then we'll fetch user data from this API
const loadUsers = async () =>
  await fetch('https://fakestoreapi.com/products')
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());

let oneOfTheProducts = {};
function Products() {
  const onShowingProduct = (e) => {
    const j = data[e.currentTarget.id - 1];
    oneOfTheProducts = j;
    setSingleProdVis(true);
    setSingleProduct(oneOfTheProducts);
  };
  const [singleProdVis, setSingleProdVis] = useState(false);
  const [singleProduct, setSingleProduct] = useState([{}]);
  const { data, error, isLoading } = useAsync({ promiseFn: loadUsers });
  const [cart, setCart] = useState([]);
  const url = 'http://localhost:3010/cart';
  const changingVisibility = (e) => {
    console.log(singleProdVis);
    setSingleProdVis(e);
  };
  //For saving in cart.json file
  function saveToCart(products) {
    const options = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        id: products.id,
        title: products.title,
        price: products.price,
        description: products.description,
        category: products.category,
        image: products.image,
        quantity: '1',
      }),
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.id + 'Added successfully');
        setCart([...cart, data.id]);
      });
  }
  //Fetches product in the cart
  const getCart = () => {
    console.log('here');
    fetch(url)
      .then((response) => response.json())
      .then((cartList) => setCart(cartList.map((item) => item.id)));
  };
  useEffect(() => {
    getCart();
  }, [true]);

  if (isLoading)
    return (
      <div class="ui active dimmer">
        <div class="ui big text loader">Loading</div>
      </div>
    );
  if (error) return `Something went wrong: ${error.message}`;
  if (data)
    // The rendered component
    return (
      <Card className="products_card">
        {singleProdVis ? (
          <SingleProduct
            visibility={changingVisibility}
            className="overlay_container"
            singleproduct={singleProduct}
            allproducts={data}
            id={singleProduct.id}
          ></SingleProduct>
        ) : null}
        <div className="container">
          {data.map((products) => (
            <div
              key={products.id}
              id={products.id}
              className="row"
              onClick={onShowingProduct}
            >
              <div className="col-md-12">
                <div>{products.title}</div>
                <div>{products.price}</div>
                <div>
                  <img src={products.image} className="products_img" />
                </div>
                <button
                  className="add_to_cart_btn"
                  disabled={cart.some((cartId) => cartId === products.id)}
                  onClick={() => saveToCart(products)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    );
}

export default Products;
