import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Filter from "./components/Filter";
import List from "./components/List";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  let filteredProducts = products.filter(
    (product) =>
      product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "all" ||
        product.category === selectedCategory)
  );

  if (sortOrder === "priceLow") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "priceHigh") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sortOrder === "nameAZ") {
    filteredProducts.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  if (sortOrder === "nameZA") {
    filteredProducts.sort((a, b) =>
      b.title.localeCompare(a.title)
    );
  }

  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <Navbar  cartCount={cart.length} />

      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Searchbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <Filter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </div>

      <List
        products={filteredProducts}
        onAddToCart={addToCart}
      />

      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
      />
      </div>
      </div>
    </>
  );
}

export default App;