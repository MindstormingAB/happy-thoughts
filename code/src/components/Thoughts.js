import React from "react";

import NewInput from "./newthought/NewInput";
import Filters from "./filters/Filters";
import Thought from "./thought/Thought";

const Thoughts = ({
  thoughts,
  onLiked,
  addNewThought,
  selectedAuthor,
  handleAuthorChange,
  removeFilters,
  selectedCategory,
  handleCategoryChange
}) => {
  return (
    <section>
      <NewInput onInputChange={addNewThought} />
      <Filters
        selectedAuthor={selectedAuthor}
        handleAuthorChange={handleAuthorChange}
        removeFilters={removeFilters}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      {thoughts.map(thought => {
        return (
          <Thought
            key={thought._id}
            id={thought._id}
            created={thought.createdAt}
            likes={thought.hearts}
            message={thought.message}
            author={thought.author}
            category={thought.category}
            onLiked={onLiked}
          />
        );
      })}
    </section>
  );
};

export default Thoughts;