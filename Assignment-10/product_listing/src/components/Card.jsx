import React from 'react'

function Card({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition">
      <img src={product.image} alt={product.title} />

      <h3  className="font-bold text-lg mt-3 line-clamp-2">{product.title}</h3>

      <p className="text-gray-500 text-sm mt-2">{product.category}</p>

      <h4 className="text-blue-600 text-xl font-bold mt-3">${product.price}</h4>

      <button onClick={() => onAddToCart(product)}  className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Add To Cart
      </button>
    </div>
  );
}

export default Card;