import Dishes from '../dishes/Dishes';
import Reviews from '../reviews/Reviews';
import styles from './style.module.css'

const Restaurant = ({restaurant}) => {
  return restaurant == null
    ? (<div>No restaurant</div>)
    : (
        <div className={styles.restaurant}>
          <h2 className={styles.restaurant__section}>
            Ресторан - <strong>{restaurant.name}</strong>
          </h2>

          <h3 className={styles.restaurant__section}>
            Меню 
          </h3>
          <Dishes restaurantId={restaurant.id}/>

          <h3 className={styles.restaurant__section}> 
            Отзывы 
          </h3>
          <Reviews restaurantId={restaurant.id}/>
        </div>
    );
}

export default Restaurant;