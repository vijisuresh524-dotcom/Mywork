import React from 'react'

import Card from "./Card";

function List({ products, onAddToCart }) {
  if (products.length === 0) {
    return <h2 className="text-center text-2xl font-bold">No Products Found</h2>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default List;
