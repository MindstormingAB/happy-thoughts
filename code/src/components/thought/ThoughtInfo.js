import React from "react";

import Likes from "./Likes";
import Time from "./Time";

const ThoughtInfo = ({ id, created, likes, onLiked, BASE_URL }) => {
  return (
    <div className="info">
      <Likes
        id={id}
        likes={likes}
        onLiked={onLiked}
        BASE_URL={BASE_URL}
      />
      <Time created={created} />
    </div>
  );
};

export default ThoughtInfo;