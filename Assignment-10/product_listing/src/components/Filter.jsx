import React from 'react'
function Filter({
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder,
}) {
  return (
    <div  className="flex gap-3">
      <select className='border border-gray-300 rounded-lg p-3 w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500'
        value={selectedCategory}
        onChange={(e) =>
          setSelectedCategory(e.target.value)
        }
      >
        <option value="all">All</option>
        <option value="electronics">
          Electronics
        </option>
        <option value="jewelery">
          Jewelery
        </option>
        <option value="men's clothing">
          Men's Clothing
        </option>
        <option value="women's clothing">
          Women's Clothing
        </option>
      </select>

      <select className='border border-gray-300 rounded-lg p-3 w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500'
        value={sortOrder}
        onChange={(e) =>
          setSortOrder(e.target.value)
        }
      >
        <option value="default">Sort</option>
        <option value="priceLow">
          Price Low-High
        </option>
        <option value="priceHigh">
          Price High-Low
        </option>
        <option value="nameAZ">
          Name A-Z
        </option>
        <option value="nameZA">
          Name Z-A
        </option>
      </select>
    </div>
  );
}

export default Filter;