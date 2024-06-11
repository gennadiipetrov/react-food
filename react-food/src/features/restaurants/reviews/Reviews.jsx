import Review from './review/Review';
import ReviewForm from './review-form/ReviewForm';

import styles from './style.module.css'
import { useGetReviewsByRestaurantIdQuery } from '../../../redux/service/api';

const Reviews = ({restaurantId}) => {
    const {data: reviews, isError, isFetching, isLoading} = useGetReviewsByRestaurantIdQuery(restaurantId);

    return !reviews
    ? (<div>No reviews</div>)
    : (
        <div className={styles.reviews}>
            <ul>
                {
                reviews.map(r => 
                        <li key={r.id}>
                            <Review review={r}/>
                        </li>
                    )
                }
            </ul>

            <ReviewForm/>
        </div>
    );
}

export default Reviews;