import React from 'react';

const Cart = ({ cartItems, onRemove, onCheckout }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.amount, 0);
  const discount = cartItems.length >= 3 ? 0.1 : 0;
  const discountedPrice = totalPrice - totalPrice * discount;

  return (
    <div className="cart">
      <ol>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.amount}
            <button onClick={() => onRemove(item)}>Delete</button>
          </li>
        ))}
      </ol>
      <h4>Total: ${discountedPrice.toFixed(2)}</h4>
      <h5>Discount: {discount * 100}%</h5>
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;