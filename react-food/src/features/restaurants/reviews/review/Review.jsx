const Review = ({value}) => {
  return !value
  ? (<div>empty review</div>)
  :  (
      <div>
        {value.user}-{value.rating}-{value.text}
      </div>
    );
}

export default Review;