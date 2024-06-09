import {useState} from 'react'
import Restaurant from './restaurant/Restaurant';
import RestaurantTab from './restaurant-tab/RestaurantTab';
import RestaurantTabs from './restaurant-tab/RestaurantTabs';
import styles from './style.module.css'

const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(null);

  return (
      <div>
        <div className={styles.tabs}>
          { <RestaurantTabs onTabClick={id => setActiveRestaurantId(id)}/> } 
        </div>

        <Restaurant restaurantId={activeRestaurantId}/>
      </div>
    );
}

export default Restaurants;