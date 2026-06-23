import React from 'react'
function Navbar({ cartCount }) {
  return (
    <div>
    <nav className="bg-purple-600 text-white px-6 py-4 flex  justify-between items-center shadow-md ">
      <h2 className="text-3xl font-bold px-10">Product Store</h2>
      <h3  className="text-lg font-bold">🛒 Cart ({cartCount})</h3>
    </nav>
    </div>
  );
}

export default Navbar;
