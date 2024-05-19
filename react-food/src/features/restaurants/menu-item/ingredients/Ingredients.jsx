import React from 'react';

const Ingredients = ({value}) => {
  return  (
      <div>
        <strong>Ингридиенты:</strong> { value.join(',')}
      </div>
    );
}

export default Ingredients;