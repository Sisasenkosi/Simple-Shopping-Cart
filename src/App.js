import React, { useState } from 'react';
import './App.css';

const PAGE_CART = 'cart';
const PAGE_PRODUCTS = 'products';

function App() {
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const [cart, setCart] = useState([]);

  const [products] = useState([
    {
      name: 'Macbook',
      cost: '$560',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHSUEkoYRDL9HwJ3N9D-COcWI6QAwZUzs6Hg&usqp=CAU',
    },

    {
      name: 'Airpods',
      cost: '$50',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMMykumwzjIrI6GUlVjH1GV1UJ5cH9WT5fzPbQ_dm&s',
    },

    {
      name: 'Apple watch',
      cost: '$250',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHBDOE9bX2Z3zvSa7haCffGGY3tI2NO_qD6FQel4IctQ&s',
    },
    {
      name: 'Nikeys',
      cost: '$150',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4aEaT5kv3FbrGMBRZmddlkjBx-b61Fo-ug&usqp=CAU',
    },
  ]);

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const RemoveFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderProducts = () => (
    <>
      <h1>A-Star Shopping Center</h1>
      <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name} />

            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    </>
  );

  const renderCart = () => (
    <>
      <h1>Trolly</h1>
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name} />

            <button onClick={() => RemoveFromCart(product)}>Remove </button>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart({cart.length})
        </button>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </header>

      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
}

export default App;
