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


class SecondaryReview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  render () {

    let reviewText = this.props.review.reviewText;
    if (reviewText.length > 500) {
      reviewText = reviewText.slice(0, 499);
    }

    let userName = this.props.review.userName
    if (userName.length > 17) {
      userName = userName.slice(0, 16) + '...'
    }

    var imageURL = 'https://gifbucket.s3-us-west-1.amazonaws.com/icon_thumbsUp_v6.png';
    var recommendText = 'Recommended'
    if (this.props.review.recommended === 0) {
      imageURL = 'https://gifbucket.s3-us-west-1.amazonaws.com/icon_thumbsDown_v6.png';
      recommendText = 'Not Recommended'
    }

    var postedDateArr = new Date(this.props.review.creationDate).toString().split(' ');
    var postedDateString = `${postedDateArr[1]} ${postedDateArr[2]} ${postedDateArr[3]}`

    return (
    <SecondaryReviewWrapper>
      <SecondaryThumb>
      <img src={imageURL} width="25" height="25" />
      </SecondaryThumb>
      <SecondaryUserName>
        {userName}
      </SecondaryUserName>
      <SecondaryTimePlayed>
        {this.props.review.playtime} hrs
      </SecondaryTimePlayed>
      <SecondarySteamIcon>
        <img src="https://gifbucket.s3-us-west-1.amazonaws.com/icon_review_steam.png" />
      </SecondarySteamIcon>
      <SecondaryReviewDatePosted>
        posted {postedDateString}
      </SecondaryReviewDatePosted>
      <SecondaryReviewText>
      {reviewText}
      </SecondaryReviewText>
      <SecondaryHelpfulMessage>
        Helpful?
      </SecondaryHelpfulMessage>
      <SecondaryHelpfulButtons>
        <FeedbackCollectorComponent />
      </SecondaryHelpfulButtons>
    </SecondaryReviewWrapper>
    )
  }
}

export default SecondaryReview;