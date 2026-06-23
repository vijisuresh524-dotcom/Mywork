import React from 'react'

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Cart Items</h2>

      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div  className="flex justify-between items-center border-b py-2" key={index}>
              <p>
                {item.name} - ${item.price}
              </p>

              <button className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}

          <h3 className="mt-4 text-xl font-bold">Total: ${total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;

