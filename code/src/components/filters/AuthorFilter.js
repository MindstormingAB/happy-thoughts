import React, { useState, useEffect } from "react";

const AuthorFilter = ({ selectedAuthor, onAuthorChange, BASE_URL, thoughts }) => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthors();
    // eslint-disable-next-line
  }, [thoughts]);

  const fetchAuthors = () => {
    fetch(`${BASE_URL}/authors`)
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