import Review from './review/Review';
import ReviewForm from './review-form/ReviewForm';

import styles from './style.module.css'

const Reviews = ({reviewIds}) => {
    
    return !reviewIds
    ? (<div>No reviews</div>)
    : (
        <div className={styles.reviews}>
            <ul>
                {
                reviewIds.map(id => 
                        <li key={id}>
                            <Review id={id}/>
                        </li>
                    )
                }
            </ul>

            <ReviewForm/>
        </div>
    );
}

export default Reviews;