import FeedbackCollectorComponent from '../feedbackCollector/feedbackCollectorComponent.jsx';
import {
  SecondaryReviewWrapper,
  SecondaryThumb,
  SecondaryUserName,
  SecondaryTimePlayed,
  SecondarySteamIcon,
  SecondaryReviewDatePosted,
  SecondaryReviewText,
  SecondaryHelpfulMessage,
  SecondaryHelpfulButtons
} from './secondaryReview.styles.jsx'


var SecondaryReview = props => {

  let reviewText = props.review.reviewText;
  if (reviewText.length > 500) {
    reviewText = reviewText.slice(0, 499);
  }

  let userName = props.review.userName
  if (userName.length > 17) {
    userName = userName.slice(0, 16) + '...'
  }

  let purchaseIco = ""
  props.review.productActivation === 1 ? purchaseIco = "https://gifbucket.s3-us-west-1.amazonaws.com/icon_review_steam.png" : purchaseIco =  "https://gifbucket.s3-us-west-1.amazonaws.com/icon_review_key.png"

  var imageURL = 'https://gifbucket.s3-us-west-1.amazonaws.com/icon_thumbsUp_v6.png';
  var recommendText = 'Recommended'
  if (props.review.recommended === 0) {
    imageURL = 'https://gifbucket.s3-us-west-1.amazonaws.com/icon_thumbsDown_v6.png';
    recommendText = 'Not Recommended'
  }

  var postedDateArr = new Date(props.review.creationDate).toString().split(' ');
  var postedDateString = `${postedDateArr[1]} ${postedDateArr[2]} ${postedDateArr[3]}`

  return (
    <SecondaryReviewWrapper>
      <SecondaryThumb>
      <img src={imageURL} width="25" height="25" />
      </SecondaryThumb>
      <SecondaryUserName className='secondaryUserName'>
        {userName}
      </SecondaryUserName>
      <SecondaryTimePlayed className="secondaryTimePlayed">
        {props.review.playtime} hrs
      </SecondaryTimePlayed>
      <SecondarySteamIcon>
        <img src={purchaseIco} />
      </SecondarySteamIcon>
      <SecondaryReviewDatePosted>
        posted {postedDateString}
      </SecondaryReviewDatePosted>
      <SecondaryReviewText className='secondaryReviewText'>
      {reviewText}
      </SecondaryReviewText>
      <SecondaryHelpfulMessage className='helpful'>
        Helpful?
      </SecondaryHelpfulMessage>
      <SecondaryHelpfulButtons>
        <FeedbackCollectorComponent />
      </SecondaryHelpfulButtons>
    </SecondaryReviewWrapper>
  )
}

export default SecondaryReview;