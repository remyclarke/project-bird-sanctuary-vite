import React from 'react';

const Cart = ({ cartItems, onRemove, onCheckout }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.amount, 0);
  const discount = cartItems.length >= 3 ? 0.1 : 0;
  const discountedPrice = totalPrice * (1 - discount);

  return (
    <div className="cart my-3">
      <ol className="list-group">
        {cartItems.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item.name} - ${item.amount.toFixed(2)}
            <button className="btn btn-danger btn-sm" onClick={() => onRemove(item)}>Delete</button>
          </li>
        ))}
      </ol>
      <div className="mt-3">
        <h4>Total: <span className="badge badge-secondary">${discountedPrice.toFixed(2)}</span></h4>
        <h5>Discount: {discount * 100}%</h5>
      </div>
      <button className="btn btn-primary btn-block" onClick={onCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;