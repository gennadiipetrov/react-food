import React from 'react';
import Ingredients from './ingredients/Ingredients';

const Dish = ({value}) => {
  return (
      <div>
        <span> <strong>Название\цена:</strong>  {value.name}\{value.price}</span>

        <Ingredients value={value.ingredients}/>
      </div>
    );
}

export default Dish;