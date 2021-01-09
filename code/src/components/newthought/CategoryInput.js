import React from "react";

const CategoryInput = ({ newCategory, setNewCategory }) => {
  return (
    <div>
      <input
        type="text"
        value={newCategory}
        onChange={event => setNewCategory(event.target.value)}
        placeholder="Enter a category (optional)"
        aria-label="Enter a category (optional)"
        className="input"
      >
      </input>
    </div>
  );
};

export default CategoryInput;