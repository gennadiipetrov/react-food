import {useState} from 'react'
import Restaurant from './restaurant/Restaurant';
import RestaurantTab from './restaurant-tab/RestaurantTab';
import styles from './style.module.css'

const Restaurants = ({prop}) => {
  const [restaurant, setRestaurant] = useState(prop[0]);

  return !prop 
    ? (<div>No restaurants</div>)
    : (
      <div>
        <div className={styles.tabs}>
        {
          prop.map(restaurant =>
            <RestaurantTab 
              key={restaurant.id} 
              onClick={()=>setRestaurant(restaurant)}
              name={`${restaurant.name}-${restaurant.id.slice(0, 4)}`}
            />
          )
        } 
        </div>
          <Restaurant prop={restaurant}/>
      </div>
    );
}

export default Restaurants;