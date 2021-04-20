import React from 'react';
import PrimaryReview from '../primaryReview/primaryReview.jsx';

var PrimaryReviewList = props => {
  let reviewBoolean = true;
  let reviews = [...props.reviews]

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

  i = reviews.length
  if (props.purchaseType === 'Steam Purchases') {
    while (i--) {
      if (reviews[i].productActivation === 2) {
        reviews.splice(i, 1)
      }
    }
  } else if (props.purchaseType === 'Other') {
    while (i--) {
      if (reviews[i].productActivation === 1) {
        reviews.splice(i, 1)
      }
    }
  }


  return (

    <div>
      { reviews.map(review =>
        <PrimaryReview review={review} key={review.creationDate}/>
      ) }
    </div>
  );

};

export default PrimaryReviewList;