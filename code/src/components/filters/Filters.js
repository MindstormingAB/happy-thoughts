import React from "react";

import AuthorFilter from "./AuthorFilter";
import CategoryFilter from "./CategoryFilter";

const Filters = ({
  selectedAuthor,
  handleAuthorChange,
  removeFilters,
  selectedCategory,
  handleCategoryChange }) => {
  return (
    <form className="filters">
      <AuthorFilter selectedAuthor={selectedAuthor} onAuthorChange={handleAuthorChange} />
      <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      <button
        onClick={removeFilters}
        aria-label="Click here to remove filters"
        className="filter-button"
      >
        Remove filters
      </button>
    </form>
  );
};

export default Filters;