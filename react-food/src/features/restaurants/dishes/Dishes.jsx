import { useGetDishesByRestaurantIdQuery } from '../../../redux/service/api';
import Dish from './dish/Dish';
import styles from './style.module.css';

const Dishes = ({restaurantId}) => {

    const {data: dishes, isError, isFetching, isLoading} = useGetDishesByRestaurantIdQuery(restaurantId);

    return !dishes
    ? (<div>No dishes</div>)
    : (
            <ul className={styles.dishes}>
                {
                    dishes?.map(d => 
                        <li key={d.id}>
                            <Dish dish={d}/>
                        </li>
                    )
                }
            </ul>
        );
}

export default Dishes;