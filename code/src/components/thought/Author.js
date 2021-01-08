import React from 'react';

const Author = ({ author }) => {
  return (
    <div className="extra">
      <p tabIndex='0'>Written by {author}</p>
    </div>
  );
};

export default Author;