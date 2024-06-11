const Review = ({review}) => {
  return !review
  ? (<div>empty review</div>)
  :  (
      <div>
        {review.user}-{review.rating}-{review.text}
      </div>
    );
}

export default Review;