import Review from './review.jsx';

var ReviewList = props => {

  return (

    <div>
      { props.reviews.map(review =>
        <Review review={review} key={review.creationDate}/>
      ) }
    </div>
  );

};

export default ReviewList;