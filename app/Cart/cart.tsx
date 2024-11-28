// Cart.tsx

import React from 'react';

interface Product {

  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Cart: React.FC<CartProps> = ({ cart, setCart }) => {
  const handleRemove = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleIncrease = (id: number) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id: number) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - RM{item.price} x {item.quantity}
              <button onClick={() => handleIncrease(item.id)}>+</button>
              <button onClick={() => handleDecrease(item.id)}>-</button>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;