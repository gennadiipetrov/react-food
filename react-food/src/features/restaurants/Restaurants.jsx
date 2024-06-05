import {useState} from 'react'
import Restaurant from './restaurant/Restaurant';
import RestaurantTab from './restaurant-tab/RestaurantTab';
import styles from './style.module.css'
import {useSelector} from 'react-redux';

const Restaurants = () => {
  const restaurants = useSelector(
    (state) => Object.values(state.Restaurant.entities).map(({id, name}) =>({id, name}))
  );

  const [restaurant, setRestaurant] = useState(restaurants[0]);

  return !restaurants 
    ? (<div>No restaurants</div>)
    : (
      <div>
        <div className={styles.tabs}>
        {
          restaurants.map(restaurant =>
            <RestaurantTab 
              key={restaurant.id} 
              onClick={()=>setRestaurant(restaurant)}
              name={`${restaurant.name}-${restaurant.id.slice(0, 4)}`}
            />
          )
        } 
        </div>
          <Restaurant restaurantId={restaurant.id}/>
      </div>
    );
}

export default Restaurants;