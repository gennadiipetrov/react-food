import {useSelector,} from 'react-redux';

const Review = ({id}) => {

  const review = useSelector(
    (state) => state.Review.entities[id]
  );

  return !review
  ? (<div>empty review</div>)
  :  (
      <div>
        {review.user}-{review.rating}-{review.text}
      </div>
    );
}

export default Review;