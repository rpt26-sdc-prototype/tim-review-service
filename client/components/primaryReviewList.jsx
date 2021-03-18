import React from 'react';
import PrimaryReview from './primaryReview.jsx';

var PrimaryReviewList = props => {

  return (

    <div>
      { props.reviews.map(review =>
        <PrimaryReview review={review} key={review.creationDate}/>
      ) }
    </div>
  );

};

export default PrimaryReviewList;