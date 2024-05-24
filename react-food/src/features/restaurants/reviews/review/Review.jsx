const Review = ({prop}) => {
  return !prop
  ? (<div>empty review</div>)
  :  (
      <div>
        {prop.user}-{prop.rating}-{prop.text}
      </div>
    );
}

export default Review;