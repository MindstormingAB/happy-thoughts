import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Thoughts from './components/Thoughts';
import Footer from './components/Footer';

// const THOUGHTS_URL = 'https://happy-thoughts-by-m.herokuapp.com/thoughts';
const THOUGHTS_URL = 'http://localhost:8080/thoughts';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch(THOUGHTS_URL)
      .then(response => response.json())
      .then(json => {
        // const filteredThoughts = json.filter(thought => thought.message);
        // const limitedThoughts = filteredThoughts.slice(0, 20);
        setThoughts(json);
      })
      .catch(error => console.error(error));
  };

  const addNewThought = (newThought, newAuthor, newCategory) => {
    fetch(THOUGHTS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newThought, author: newAuthor, category: newCategory }),
    }).then(() => fetchThoughts());
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

  return (
    <div className='container'>
      <Header />
      <Thoughts thoughts={thoughts} onLiked={onLiked} addNewThought={addNewThought} />
      <Footer />
    </div>
  );
};
