import Dishes from '../dishes/Dishes';
import Reviews from '../reviews/Reviews';
import styles from './style.module.css'
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getReviewsByRestaurantId} from '../../../redux/entities/review/thunk/get-reviews-by-restaurant-id'
import { getDishesByRestaurantId} from '../../../redux/entities/dish/thunk/get-dishes-by-restaurant-id'

import { selectDishIds } from '../../../redux/entities/dish/Selectors';
import { selectReviewIds } from '../../../redux/entities/review/Selectors';
import { selectRestaurantById } from '../../../redux/entities/restaurant/Selectors';

const Restaurant = ({restaurantId}) => {
    const dispatch = useDispatch();

    useEffect(() => {
      if (restaurantId != null) {
        dispatch(getReviewsByRestaurantId(restaurantId));
        dispatch(getDishesByRestaurantId(restaurantId));
      }
    }, [dispatch, restaurantId]);

    const dishIds = useSelector(state =>selectDishIds(state));
    const reviewIds = useSelector(state =>selectReviewIds(state));
    const restaurant = useSelector(state =>selectRestaurantById(state, restaurantId));

    console.log(dishIds);
    console.log(reviewIds);
    console.log(restaurant);


  return restaurantId == null || restaurant == null
    ? (<div>No restaurant</div>)
    : (
        <div className={styles.restaurant}>
          <h2 className={styles.restaurant__section}> Ресторан - <strong>{restaurant.name}</strong> </h2>

          <h3 className={styles.restaurant__section}> Меню </h3>
          <Dishes menuIds={dishIds}/>

          <h3 className={styles.restaurant__section}> Отзывы </h3>
          <Reviews reviewIds={reviewIds}/>
        </div>
    );
}

export default Restaurant;