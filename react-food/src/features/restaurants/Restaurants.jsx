import {useState} from 'react'
import Restaurant from './restaurant/Restaurant';
import RestaurantTab from './restaurant-tab/RestaurantTab';

const Restaurants = ({prop}) => {
  const [restaurant, setRestaurant] = useState(prop[0]);

  return !prop 
    ? (<div>No restaurants</div>)
    : (
      <div>
        {
          prop.map(restaurant =>
            <RestaurantTab 
              key={restaurant.id} 
              onClick={()=>setRestaurant(restaurant)}
              name={`${restaurant.name}-${restaurant.id.slice(0, 4)}`}
            />
          )}

          <Restaurant prop={restaurant}/>
      </div>
    );
}

export default Restaurants;