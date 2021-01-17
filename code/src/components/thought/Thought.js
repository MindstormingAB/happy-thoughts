import React from "react";

import Message from "./Message";
import Author from "./Author";
import Category from "./Category";
import ThoughtInfo from "./ThoughtInfo";

const Thought = ({ id, created, likes, message, author, category, onLiked, BASE_URL }) => {
  return (
    <article className="thought">
      <Message message={message} />
      {author && <Author author={author} />}
      {category && <Category category={category} />}
      <ThoughtInfo
        id={id}
        created={created}
        likes={likes}
        onLiked={onLiked}
        BASE_URL={BASE_URL}
      />
    </article>
  );
};

export default Thought;