import Dishes from '../dishes/Dishes';
import Reviews from '../reviews/Reviews';

import styles from './style.module.css'

const Restaurant = ({prop}) => {
  return !prop 
    ? (<div>No restaurant</div>)
    : (
        <div className={styles.restaurant}>
          <h2 className={styles.restaurant__section}> Ресторан - <strong>{prop.name}</strong> </h2>

          <h3 className={styles.restaurant__section}> Меню </h3>
          <Dishes prop={prop.menu}/>

          <h3 className={styles.restaurant__section}> Отзывы </h3>
          <Reviews prop={prop.reviews}/>
        </div>
    );
}

export default Restaurant;