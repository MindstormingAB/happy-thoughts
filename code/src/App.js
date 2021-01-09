import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Thoughts from "./components/Thoughts";
import Footer from "./components/Footer";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const THOUGHTS_URL = "https://happy-thoughts-by-m.herokuapp.com/thoughts";

  useEffect(() => {
    if (selectedCategory && selectedAuthor) {
      fetchThoughts(`https://happy-thoughts-by-m.herokuapp.com/thoughts?category=${selectedCategory}&author=${selectedAuthor}`);
    } else if (selectedCategory) {
      fetchThoughts(`https://happy-thoughts-by-m.herokuapp.com/thoughts?category=${selectedCategory}`);
    } else if (selectedAuthor) {
      fetchThoughts(`https://happy-thoughts-by-m.herokuapp.com/thoughts?author=${selectedAuthor}`);
    } else {
      fetchThoughts(THOUGHTS_URL);
    }
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
      />
      <Footer />
    </div>
  );
};
