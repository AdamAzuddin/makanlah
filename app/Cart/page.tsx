// App.tsx

"use client"  
import './style.css';
import React, { useState } from 'react';
import Cart from './cart'; // Import Cart Component
import ProductList from './product'; // Import ProductList Component

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  // Add item to the cart
  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h1>MakanLah!</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;