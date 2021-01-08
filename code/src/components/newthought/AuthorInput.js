import React from "react";

const AuthorInput = ({ newAuthor, setNewAuthor }) => {
  return (
    <div>
      {/* <p tabIndex="0" className="new-message">What's making you happy right now?</p> */}
      <input
        type="text"
        value={newAuthor}
        onChange={event => setNewAuthor(event.target.value)}
        placeholder="Enter your name (optional)"
        aria-label="Enter your name (optional)"
        className="input"
      >
      </input>
    </div>
  );
};

export default AuthorInput;