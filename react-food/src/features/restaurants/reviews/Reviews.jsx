import Review from './review/Review';

const Reviews = ({prop}) => {
    return !prop
    ? (<div>No reviews</div>)
    : (
    <ul>
        {
        prop.map(review => 
                <li key={review.id}>
                    <Review prop={review}/>
                </li>
            )
        }
    </ul>
    );
}

export default Reviews;