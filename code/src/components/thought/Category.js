import React from 'react';

const Category = ({ category }) => {
  return (
    <div className="extra">
      <p tabIndex='0'>Category: {category}</p>
    </div>
  );
};

export default Category;