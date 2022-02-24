import React, {useState, useEffect} from 'react';
import './App.css';
import { useAsync } from 'react-async';
import Card from './Card';
// Then we'll fetch user data from this API
const loadUsers = async () =>
  await fetch('https://fakestoreapi.com/products')
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());

// Our component
function Products() {
  const { data, error, isLoading } = useAsync({ promiseFn: loadUsers });
  const [cart, setCart] = useState([]);
  const url = 'http://localhost:3010/cart';
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

  if (isLoading) return 'Loading...';
  if (error) return `Something went wrong: ${error.message}`;
  if (data)
    // The rendered component
    return (
      <Card className="products_card">
        <div className="container">
          <div>
            <h2>products</h2>
          </div>
          {data.map((products) => (
            <div key={products.id} className="row">
              <div className="col-md-12">
                <p>{products.title}</p>
                <p>{products.price}</p>
                <p>
                  <button
                    disabled={cart.some((cartId) => cartId === products.id)}
                    onClick={() => saveToCart(products)}
                  >
                    Add To Cart
                  </button>
                </p>
                <img src={products.image} className="products_img" />
              </div>
            </div>
          ))}
        </div>
      </Card>
    );
}

export default Products;
