import React from 'react';
import Review from './review/Review';

const Reviews = ({value}) => {
  return (
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