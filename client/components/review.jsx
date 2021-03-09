var Review = props => {
  console.log(props.review);
  return (
    <div>
      <div>Username: {props.review.userName}</div>
      <br/>
      <div>ReviewText:</div>
      <div>{props.review.reviewText}</div>
      <br/>
    </div>
  );
};

export default Review;