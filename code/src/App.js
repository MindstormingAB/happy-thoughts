import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Thoughts from "./components/Thoughts";
import Footer from "./components/Footer";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  // const BASE_URL = "http://localhost:8080";
  const BASE_URL = "https://happy-thoughts-by-m.herokuapp.com";
  const THOUGHTS_URL = `${BASE_URL}/thoughts`;

  useEffect(() => {
    if (selectedCategory && selectedAuthor) {
      fetchThoughts(`${THOUGHTS_URL}?category=${selectedCategory}&author=${selectedAuthor}`);
    } else if (selectedCategory) {
      fetchThoughts(`${THOUGHTS_URL}?category=${selectedCategory}`);
    } else if (selectedAuthor) {
      fetchThoughts(`${THOUGHTS_URL}?author=${selectedAuthor}`);
    } else {
      fetchThoughts(THOUGHTS_URL);
    }
    // eslint-disable-next-line
  }, [selectedCategory, selectedAuthor]);

  const fetchThoughts = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setThoughts(json);
      })
      .catch(error => console.error(error));
  };

  const addNewThought = (newThought, newAuthor, newCategory) => {
    fetch(THOUGHTS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought, author: newAuthor, category: newCategory }),
    }).then(() => fetchThoughts(THOUGHTS_URL));
  };

  const onLiked = thoughtId => {
    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1;
      }
      return thought;
    });
    setThoughts(updatedThoughts);
  };

  const handleAuthorChange = event => {
    setSelectedAuthor(event.target.value);
  };

  const removeFilters = () => {
    setSelectedAuthor("");
    setSelectedCategory("");
  }

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="container">
      <Header />
      <Thoughts
        thoughts={thoughts}
        onLiked={onLiked}
        addNewThought={addNewThought}
        selectedAuthor={selectedAuthor}
        handleAuthorChange={handleAuthorChange}
        removeFilters={removeFilters}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        BASE_URL={BASE_URL}
      />
      <Footer />
    </div>
  );
};
