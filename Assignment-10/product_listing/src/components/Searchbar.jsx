import React from 'react'

function Searchbar({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <input className="border border-gray-300 rounded-lg p-3 w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="text"
      placeholder="Search Product..."
      value={searchTerm}
      onChange={(e) =>
        setSearchTerm(e.target.value)
      }
    />
  );
}

export default Searchbar;