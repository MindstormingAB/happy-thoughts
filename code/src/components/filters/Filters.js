import React from "react";

import AuthorFilter from "./AuthorFilter";
import CategoryFilter from "./CategoryFilter";

const Filters = ({
  selectedAuthor,
  handleAuthorChange,
  removeFilters,
  selectedCategory,
  handleCategoryChange,
  BASE_URL,
  thoughts
}) => {
  return (
    <form className="filters">
      <AuthorFilter
        selectedAuthor={selectedAuthor}
        onAuthorChange={handleAuthorChange}
        BASE_URL={BASE_URL}
        thoughts={thoughts}
      />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        BASE_URL={BASE_URL}
        thoughts={thoughts}
      />
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