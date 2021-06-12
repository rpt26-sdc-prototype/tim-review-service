import React from 'react';
import SecondaryReview from '../secondaryReview/secondaryReview.jsx';

var SecondaryReviewList = ({reviews}) => {
  return (
    <div>
      { reviews.map((review, index) =>
        <SecondaryReview key={index} review={review} key={review.creationDate} />
      )}
    </div>
  );

};

export default SecondaryReviewList;