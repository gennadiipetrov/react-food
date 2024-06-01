import Review from './review/Review';
import ReviewForm from './review-form/ReviewForm';

const Reviews = ({prop}) => {
    return !prop
    ? (<div>No reviews</div>)
    : (
        <div>
            <ul>
                {
                prop.map(review => 
                        <li key={review.id}>
                            <Review prop={review}/>
                        </li>
                    )
                }
            </ul>

            <ReviewForm/>
        </div>
    );
}

export default Reviews;