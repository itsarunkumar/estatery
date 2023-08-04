"use client";
import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [filterValues, setFilterValues] = useState({
    location: "",
    moveInDate: "",
    price: "",
    propertyType: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilterValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFilterClick = () => {
    onFilterChange(filterValues);
  };

  return (
    <div className="w-full flex justify-between items-center gap-4 mt-4  px-8 rounded-lg">
      <div className="flex flex-wrap gap-4">
        <div>
          <label className="filter-label">Location:</label>
          <input
            type="text"
            name="location"
            value={filterValues.location}
            onChange={handleInputChange}
            className="filter-input"
          />
        </div>
        <div>
          <label className="filter-label">Move In Date:</label>
          <input
            type="date"
            name="moveInDate"
            value={filterValues.moveInDate}
            onChange={handleInputChange}
            className="filter-input"
          />
        </div>
        <div>
          <label className="filter-label">Price:</label>
          <input
            type="number"
            name="price"
            value={filterValues.price}
            onChange={handleInputChange}
            className="filter-input"
          />
        </div>
        <div>
          <label className="filter-label">Property Type:</label>
          <select
            name="propertyType"
            value={filterValues.propertyType}
            onChange={handleInputChange}
            className="filter-select"
          >
            <option value="">Any</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Condo">Condo</option>
          </select>
        </div>
      </div>
      <button
        onClick={handleFilterClick}
        className="px-8 py-4 bg-purple-600 text-white m-4 rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default Filter;
