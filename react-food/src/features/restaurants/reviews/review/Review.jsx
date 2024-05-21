import React from 'react';

const Review = ({value}) => {
  return (
      <div>
        {value.user}-{value.rating}-{value.text}
      </div>
    );
}

export default Review;