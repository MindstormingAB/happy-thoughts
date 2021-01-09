import React, { useState, useEffect } from "react";

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, [categories]);

  const fetchCategories = () => {
    fetch("https://happy-thoughts-by-m.herokuapp.com/categories")
      .then(response => response.json())
      .then(json => {
        setCategories(json);
      })
      .catch(error => console.error(error));
  };
  return (
    <div className="filter">
      <label htmlFor="category">Filter by category</label>
      <input className="filter-input" id="category" list="categories" value={selectedCategory} onChange={onCategoryChange} />
      <datalist id="categories">
        {categories.map((category) => {
          return <option key={category._id} value={category._id}>{category._id}</option>
        }
        )}
      </datalist>
    </div>
  );
};

export default CategoryFilter;