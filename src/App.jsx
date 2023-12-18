import React, { useState } from 'react';
import Cards from './components/Cards';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import birdsData from './data/birds';
import bonusItemsData from './data/bonusItems';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAdopt = (bird) => {
    // Check if the bird is already in the cart
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
    <div>
      <Cards birds={birdsData} onAdopt={handleAdopt} />
      <Cart cartItems={cartItems} onRemove={handleRemove} />
      <Checkout onResetCart={handleResetCart} />
    </div>
  );
};

export default App;