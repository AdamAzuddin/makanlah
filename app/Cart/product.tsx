// ProductList.tsx

import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ProductListProps {
  addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ addToCart }) => {
  const products: Product[] = [
    { id: 1, name: 'Burger Muiz', price: 5.00, quantity:1 },
    { id: 2, name: 'zaas', price: 7.00,quantity:1 },
    { id: 3, name: 'zusss', price: 4.00,quantity:1 },
  ];

  return (
    <div>
      <h2>Our Menu</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - RM{product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;