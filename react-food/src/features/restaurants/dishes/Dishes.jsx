import React from 'react';
import Dish from './dish/Dish';

const Dishes = ({value}) => {
  return (
        <ul>
            {
            value?.map(dish => 
                <li key={dish.id}>
                    <Dish value={dish}/>
                </li>
            )
            }
        </ul>
    );
}

export default Dishes;