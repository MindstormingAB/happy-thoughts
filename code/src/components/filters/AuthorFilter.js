import React, { useState, useEffect } from "react";

const AuthorFilter = ({ selectedAuthor, onAuthorChange }) => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthors();
  }, [authors]);

  const fetchAuthors = () => {
    fetch("https://happy-thoughts-by-m.herokuapp.com/authors")
      .then(response => response.json())
      .then(json => {
        setAuthors(json);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="filter">
      <label htmlFor="author">Filter by name</label>
      <input className="filter-input" id="author" list="authors" value={selectedAuthor} onChange={onAuthorChange} />
      <datalist id="authors">
        {authors.map((author) => {
          return <option key={author._id} value={author._id}>{author._id}</option>
        }
        )}
      </datalist>
    </div>
  );
};

export default AuthorFilter;