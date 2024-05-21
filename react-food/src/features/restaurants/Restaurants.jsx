import React from 'react';
import Dishes from './dishes/Dishes';
import Reviews from './reviews/Reviews';

const Restaurants = ({value}) => {
  return (
    <div>

    {
      value.map(restaurant =>
        <div key={restaurant.id}>
          <h2> Ресторан - {restaurant.name} </h2>

          <h3> Меню </h3>
          <Dishes value={restaurant.menu}/>

          <h3> Отзывы </h3>
          <Reviews value={restaurant.reviews}/>
        </div>
      )}

    </div>
  );
}

export default Restaurants;