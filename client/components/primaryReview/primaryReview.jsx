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




class PrimaryReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }



  // console.log(props.review);
  // let reviewText = props.review.reviewText;
  // if (reviewText.length > 500) {
  //   reviewText = reviewText.slice(0, 499);
  // }

  render() {

    // return (
    //   <Wrapper>
    //     <Title>
    //     Hello World
    //     </Title>
    //   </Wrapper>
    // );

    let userName = this.props.review.userName
    if (userName.length > 17) {
      userName = userName.slice(0, 16) + '...'
    }

    let reviewText = this.props.review.reviewText;
    if (reviewText.length > 500) {
      reviewText = reviewText.slice(0, 499);
    }


    var imageURL = 'https://gifbucket.s3-us-west-1.amazonaws.com/icon_thumbsUp_v6.png';
    var recommendText = 'Recommended'
    if (this.props.review.recommended === 0) {
      imageURL = 'https://gifbucket.s3-us-west-1.amazonaws.com/icon_thumbsDown_v6.png';
      recommendText = 'Not Recommended'
    }

    var creationDate = this.props.review.creationDate.toString();
    var helpfulCount = this.props.review.helpfulCount.toString();

    var postedDateArr = new Date(this.props.review.creationDate).toString().split(' ');
    var postedDateString = `${postedDateArr[1]} ${postedDateArr[2]} ${postedDateArr[3]}`


    return (
      <ReviewWrapper>
        <ProfilePicture>
          <img src={this.props.review.profilePicture} width="35" height="35" />
        </ProfilePicture>
        <UserName>
          {userName}
        </UserName>
        <ProductCount>
          {this.props.review.gamesOwned} products in account
        </ProductCount>
        <ReviewCount>
          {this.props.review.reviewsGiven} reviews
        </ReviewCount>
        <ThumbsContainer>
          <img src={imageURL} width="35" height="35" />
        </ThumbsContainer>
        <Recommendation>
          {recommendText}
        </Recommendation>
        <SteamIcon>
          <img src="https://gifbucket.s3-us-west-1.amazonaws.com/icon_review_steam.png" />
        </SteamIcon>
        <TimePlayed>
          {this.props.review.playtime} hrs on record
        </TimePlayed>
        <PrimaryReviewDatePosted>
          posted {postedDateString}
        </PrimaryReviewDatePosted>
        <ReviewText>
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
          <FunnyCountComponent funnyCount={this.props.review.funnyCount} />
        </FunnyCount>
        <CommentCount>
          {this.props.review.comments ?
          <CommentContainer>
            <div>
              {this.props.review.comments}
            </div>
            <img src="https://gifbucket.s3-us-west-1.amazonaws.com/comment_quoteicon_blue.png" />
          </CommentContainer> : null}
        </CommentCount>

      </ReviewWrapper>

    )

  }
}

export default PrimaryReview;