import React from 'react';
import SecondaryReview from './secondaryReview.jsx';

var SecondaryReviewList = props => {

  return (

    <div>
      { props.reviews.map(review =>
        <SecondaryReview review={review} key={review.creationDate}/>
      ) }
    </div>
  );

};

export default SecondaryReviewList;