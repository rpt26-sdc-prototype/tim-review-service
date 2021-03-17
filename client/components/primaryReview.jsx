import styled from 'styled-components';
import React from 'react';
import FeedbackCollectorComponent from './FeedbackCollectorComponent.jsx';

// const Title = styled.div`
//   /* color: #c1dbf4; */
//   color: black;
//   font-size: 13px;
//   font-family: "Motiva Sans", Sans-serif;
//   font-weight: bold;
//   padding-left: 5px;
// `;

const ReviewWrapper = styled.div`
  padding-left: 5px;
  background: papayawhip;
  border-style: solid;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 0px;
  margin-bottom: 20px;
  display: grid;
  width: 600px;
  grid-template-columns: 30px 180px 30px 320px 40px;
  gird-template-rows: 20px 20px auto auto auto auto auto auto auto;
`;

const UserName = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  color: black;
  font-size: 13px;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: bold;
  padding-left: 10px;
`;

const ProfilePicture = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 2;
`;

const ProductCount = styled.div`
  grid-column-start: 2;
  grid-row-start: 2;
  font-size: 11px;
  padding-left: 10px;
`;
const ReviewCount = styled.div`
  grid-column-start: 1;
  grid-row-start: 3;
  grid-column-end: span 2;
  font-size: 11px;
  padding-left: 5px;
`;

const ThumbsContainer = styled.div`
  grid-column-start: 3;
  grid-row-start: 1;
  grid-row-end: span 2;
`;

const Recommendation = styled.div`
  grid-column-start: 4;
  grid-row-start: 1;
  padding-left: 10px;
  font-size: 16px;
    /* color: #d6d7d8; */

  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
  line-height: 19px;
`;

const SteamIcon = styled.div`
  grid-column-start: 5;
  grid-row-start: 1;
  grid-row-end: span 2;
  padding-top: 5px;
  justify-self: end;
`;

const TimePlayed = styled.div`
  grid-column-start: 4;
  grid-row-start: 2;
  padding-left: 10px;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: 300;
  font-size: 11px;
  line-height: 15px;
  /* color: #8091a2; */
  opacity: 0.6;
`;

const ReviewText = styled.div`
  grid-column-start: 3;
  grid-row-start: 5;
  grid-column-end: span 3;
  margin-right: 8px;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
  /* color: #acb2b8; */
  overflow-wrap: break-word;
  overflow: hidden;
`;

const PrimaryReviewDatePosted = styled.div`
  grid-column-start: 3;
  grid-row-start: 4;
  grid-column-end: span 3;

`;

const HelpfulMessage = styled.div`
  grid-column-start: 3;
  grid-row-start: 6;
  grid-column-end: span 2;
  display: inline-block;
    margin-right: 9px;
    /* color: #8091a2; */
    font-size: 12px;
    opacity: 0.6;
`;

const HelpfulButtons = styled.div`
  grid-column-start: 3;
  grid-row-start: 7;
  grid-column-end: span 2;
  display: inline-block;
    margin-right: 9px;
    /* color: #8091a2; */
    font-size: 12px;
    opacity: 0.6;
`;

const HelpfulCounts = styled.div`
  grid-column-start: 3;
  grid-row-start: 8;
  grid-column-end: span 2;
  display: inline-block;
    margin-right: 9px;
    /* color: #8091a2; */
    font-size: 12px;
    opacity: 0.6;
`;

const FunnyCount = styled.div`
  grid-column-start: 3;
  grid-row-start: 9;
  grid-column-end: span 2;
  display: inline-block;
    margin-right: 9px;
    /* color: #8091a2; */
    font-size: 12px;
    opacity: 0.6;
`;

const CommentCount = styled.div`
  grid-column-start: 5;
  grid-row-start: 8;
`;

const CommentContainer = styled.div`
  display: flex;
  float-right: 5px;
`;




var FunnyCountComponent = props => {
  console.log(props.funnyCount)

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

    console.log(this.props.review)
    var imageURL = 'https://gifbucket.s3-us-west-1.amazonaws.com/icon_thumbsUp_v6.png';
    var recommendText = 'Recommended'
    if (this.props.review.recommended === 0) {
      imageURL = 'https://gifbucket.s3-us-west-1.amazonaws.com/icon_thumbsDown_v6.png';
      recommendText = 'Not Recommended'
    }

    var creationDate = this.props.review.creationDate.toString();
    var helpfulCount = this.props.review.helpfulCount.toString();


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
          posted {this.props.review.creationDate} seconds ago
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
        <HelpfulCounts>
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