import {useState} from 'react'
import Restaurant from './restaurant/Restaurant';
import RestaurantTabs from './restaurant-tab/RestaurantTabs';
import styles from './style.module.css'
import { useGetRestaurantsQuery } from '../../redux/service/api';

const Restaurants = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(null);

  const {data: restaurants, isError, isFetching, isLoading} = useGetRestaurantsQuery();

  return (
      <div>
        <div className={styles.tabs}>
          { <RestaurantTabs 
              onTabClick={r => setActiveRestaurant(r)}
              restaurants={restaurants}
            /> 
          } 
        </div>

        <Restaurant restaurant={activeRestaurant}/>
      </div>
    );
}

export default Restaurants;