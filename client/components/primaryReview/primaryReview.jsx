import React from 'react';
import FeedbackCollectorComponent from '../feedbackCollector/feedbackCollectorComponent.jsx';
import {
  ReviewWrapper,
  UserName,
  ProfilePicture,
  ProductCount,
  ReviewCount,
  ThumbsContainer,
  Recommendation,
  SteamIcon,
  TimePlayed,
  ReviewText,
  PrimaryReviewDatePosted,
  HelpfulMessage,
  HelpfulButtons,
  HelpfulCounts,
  FunnyCount,
  CommentCount,
  CommentContainer
} from './primaryReview.styles.jsx';

var FunnyCountComponent = props => {
  if (props.funnyCount > 0) {
    return (
      <div>{props.funnyCount} people found this review funny</div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

var PrimaryReview = props => {

  let userName = props.review.username
  if (userName.length > 17) {
    userName = userName.slice(0, 16) + '...'
  }

  let reviewText = props.review.reviewText;
  if (reviewText.length > 500) {
    reviewText = reviewText.slice(0, 499);
  }

  let purchaseIco = ""
  props.review.productActivation === 1 ? purchaseIco = "https://gifbucket.s3-us-west-1.amazonaws.com/icon_review_steam.png" : purchaseIco = "https://gifbucket.s3-us-west-1.amazonaws.com/icon_review_key.png"


  var imageURL = 'https://gifbucket.s3-us-west-1.amazonaws.com/icon_thumbsUp_v6.png';
  var recommendText = 'Recommended'
  if (props.review.recommended === 0) {
    imageURL = 'https://gifbucket.s3-us-west-1.amazonaws.com/icon_thumbsDown_v6.png';
    recommendText = 'Not Recommended'
  }

  var creationDate = Number(props.review.creationdate);
  var helpfulCount = props.review.helpfulCount.toString();

  var postedDateArr = new Date(creationDate).toString().split(' ');
  var postedDateString = `${postedDateArr[1]} ${postedDateArr[2]} ${postedDateArr[3]}`


  return (
    <ReviewWrapper>
      <ProfilePicture>
        <img src={props.review.profilepicture} width="35" height="35" />
      </ProfilePicture>
      <UserName className='username'>
        {userName}
      </UserName>
      <ProductCount className='productCount'>
        {props.review.gamesOwned} products in account
      </ProductCount>
      <ReviewCount>
        {props.review.reviewsGiven} reviews
      </ReviewCount>
      <ThumbsContainer>
        <img src={imageURL} width="35" height="35" />
      </ThumbsContainer>
      <Recommendation className='recommendation'>
        {recommendText}
      </Recommendation>
      <SteamIcon>
        <img src={purchaseIco} />
      </SteamIcon>
      <TimePlayed className='timeplayed'>
        {props.review.playtime} hrs on record
      </TimePlayed>
      <PrimaryReviewDatePosted>
        posted {postedDateString}
      </PrimaryReviewDatePosted>
      <ReviewText className='reviewText'>
        {reviewText}
      </ReviewText>
      <HelpfulMessage>
        Was this review helpful?
      </HelpfulMessage>
      <HelpfulButtons>
        <FeedbackCollectorComponent />
      </HelpfulButtons>
      <HelpfulCounts className="helpfulCount">
        {helpfulCount} people found this helpful
      </HelpfulCounts>
      <FunnyCount>
        <FunnyCountComponent funnyCount={props.review.funnyCount} />
      </FunnyCount>
      <CommentCount>
        {props.review.comments ?
          <CommentContainer>
            <div>
              {props.review.comments}
            </div>
            <img src="https://gifbucket.s3-us-west-1.amazonaws.com/comment_quoteicon_blue.png" />
          </CommentContainer> : null}
      </CommentCount>
    </ReviewWrapper>
  )
}

export default PrimaryReview;