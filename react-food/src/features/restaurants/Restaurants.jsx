import React from 'react';
import MenuItem from './menu-item/menuItem';
import Review from './review/review';

const Restaurants = ({value}) => {
  return (
    <div>

    {
      value.map(restaurant =>
        <div key={restaurant.id}>

          <h2>
            Ресторан - {restaurant.name}
          </h2>

          <h3>
            Меню
          </h3>

          <ul>
            {
              restaurant.menu.map(menuItem => 
                <li key={menuItem.id}>
                    <MenuItem value={menuItem}/>
                </li>
              )
            }
          </ul>

          <h3>
            Отзывы
          </h3>

          <ul>
            {
              restaurant.reviews.map(review => 
                    <li key={review.id}><Review value={review}/></li>
                )
            }
          </ul>
        </div>
      )}

    </div>
  );
}

export default Restaurants;