import React from 'react';

import Author from './Author';
import Category from './Category';

const ThoughtExtra = ({ author, category }) => {
  return (
    <div className='info'>
      <Author author={author} />
      {category && <Category category={category} />}
    </div>
  );
};

export default ThoughtExtra;