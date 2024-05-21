import Review from './review/Review';

const Reviews = ({value}) => {
    return !value
    ? (<div>No reviews</div>)
    : (
    <ul>
        {
        value.map(review => 
                <li key={review.id}>
                    <Review value={review}/>
                </li>
            )
        }
    </ul>
    );
}

export default Reviews;