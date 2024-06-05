import Dish from './dish/Dish';
import styles from './style.module.css';

const Dishes = ({menuIds}) => {
  return !menuIds
  ? (<div>No dishes</div>)
  : (
        <ul className={styles.dishes}>
            {
            menuIds?.map(id => 
                <li key={id}>
                    <Dish id={id}/>
                </li>
            )
            }
        </ul>
    );
}

export default Dishes;