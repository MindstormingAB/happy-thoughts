import React, { useState } from "react";

import Textarea from "./Textarea";
import AuthorInput from "./AuthorInput";
import CategoryInput from "./CategoryInput";
import InputInfo from "./InputInfo";

const NewInput = ({ onInputChange }) => {
  const [newThought, setNewThought] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const onHandleSubmit = event => {
    event.preventDefault();
    onInputChange(newThought, newAuthor, newCategory);
    setNewThought("");
    setNewAuthor("");
    setNewCategory("");
  };

  return (
    <form className="new-thought" onSubmit={onHandleSubmit}>
      <Textarea newThought={newThought} setNewThought={setNewThought} />
      <AuthorInput newAuthor={newAuthor} setNewAuthor={setNewAuthor} />
      <CategoryInput newCategory={newCategory} setNewCategory={setNewCategory} />
      <InputInfo newThought={newThought} />
    </form>
  );
};

export default NewInput;