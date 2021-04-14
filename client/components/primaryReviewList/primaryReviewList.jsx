import React from 'react';
import PrimaryReview from '../primaryReview/primaryReview.jsx';

var PrimaryReviewList = props => {
  let reviewBoolean = true;
  let reviews = [...props.reviews]

  console.log('primary review list')

  let i = reviews.length
  if (props.reviewType === 'Positive') {
    while (i--) {
      if (reviews[i].recommended === 0) {
        reviews.splice(i, 1)
      }
    }
  } else if (props.reviewType === 'Negative') {
    while (i--) {
      if (reviews[i].recommended === 1) {
        reviews.splice(i, 1)
      }
    }
  }

  console.log(reviews)

  return (

    <div>
      { reviews.map(review =>
        <PrimaryReview review={review} key={review.creationDate}/>
      ) }
    </div>
  );

};

export default PrimaryReviewList;