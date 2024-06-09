import Dishes from '../dishes/Dishes';
import Reviews from '../reviews/Reviews';
import styles from './style.module.css'
import {useSelector} from 'react-redux';

const Restaurant = ({restaurantId}) => {
    const restaurant = restaurantId ? useSelector(
      (state) => Object.values(state.Restaurant.entities).find(value => value.id === restaurantId)
    ) : null;

  return !restaurant 
    ? (<div>No restaurant</div>)
    : (
        <div className={styles.restaurant}>
          <h2 className={styles.restaurant__section}> Ресторан - <strong>{restaurant.name}</strong> </h2>

          <h3 className={styles.restaurant__section}> Меню </h3>
          <Dishes menuIds={restaurant.menu}/>

          <h3 className={styles.restaurant__section}> Отзывы </h3>
          <Reviews reviewIds={restaurant.reviews}/>
        </div>
    );
}

export default Restaurant;