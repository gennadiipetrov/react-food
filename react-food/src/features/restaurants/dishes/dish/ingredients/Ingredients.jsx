import React from 'react';

const Ingredients = ({prop}) => {
  return  (
      <div>
        <strong>Ингридиенты:</strong> { prop.join(',')}
      </div>
    );
}

export default Ingredients;