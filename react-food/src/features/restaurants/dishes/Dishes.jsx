import Dish from './dish/Dish';
import styles from './style.module.css';

const Dishes = ({prop}) => {
  return !prop
  ? (<div>No dishes</div>)
  : (
        <ul className={styles.dishes}>
            {
            prop?.map(dish => 
                <li key={dish.id}>
                    <Dish prop={dish}/>
                </li>
            )
            }
        </ul>
    );
}

export default Dishes;