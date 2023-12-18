import React, { useState } from 'react';
import Cards from './components/Cards';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import birdsData from './data/birds';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAdopt = (bird) => {
    const isBirdInCart = cartItems.some(item => item.name === bird.name);
    if (isBirdInCart) {
      alert('Bird Already Chosen');
      return;
    }
    setCartItems([...cartItems, bird]);
  };

  const handleRemove = (bird) => {
    setCartItems(cartItems.filter(item => item.name !== bird.name));
  };

  const handleResetCart = () => {
    setCartItems([]);
  };

  return (
    <div className="container mt-4">
     
      <div className="row mb-4">
        <div className="col">
          <h1 className="text-center">Bird Sanctuary Store</h1>
        </div>
      </div>

     
      <div className="row">
       
        <div className="col-md-8">
          <div className="flex-container">
            <Cards birds={birdsData} onAdopt={handleAdopt} />
          </div>
        </div>

        <div className="col-md-4">
          <div className="mb-3">
            <Cart cartItems={cartItems} onRemove={handleRemove} />
          </div>
          <div>
            <Checkout onResetCart={handleResetCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;