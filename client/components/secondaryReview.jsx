import styled from 'styled-components';
import React from 'react';
import FeedbackCollectorComponent from './FeedbackCollectorComponent.jsx';

const SecondaryReviewWrapper = styled.div`
  background-color: rgb(31, 46, 65)
  border-style: none;
  margin-bottom: 20px;
  display:grid;
  width: 340;
  grid-template-columns: 25px 130px 125px 20px
  gird-template-rows: auto auto auto auto auto;
  margin-right: 30px;
`;

const SecondaryThumb = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
`;

const SecondaryUserName = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  color: #819db8;
`;

const SecondaryTimePlayed = styled.div`
  grid-column-start: 3;
  grid-row-start: 1;
  color: #8091a2;
    text-transform: uppercase;
    font-size: 10px;
    opacity: 0.5;
`;

const SecondarySteamIcon = styled.div`
  grid-column-start: 4;
  grid-row-start: 1;
`;

const SecondaryReviewDatePosted = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;
  grid-column-end: span 4;
  color: #8091a2;
    font-size: 12px;
    opacity: 0.6;
`;

const SecondaryReviewText = styled.div`
  grid-column-start: 1;
  grid-row-start: 3;
  grid-column-end: span 4;
  color: #9fb4c9;
`;

const SecondaryHelpfulMessage = styled.div`
  grid-column-start: 1;
  grid-row-start: 4;
  grid-column-end: span 4;
  color: #8091a2;
    font-size: 12px;
    opacity: 0.6;
`;

const SecondaryHelpfulButtons = styled.div`
  grid-column-start: 1;
  grid-row-start: 5;
  grid-column-end: span 4;
  display: inline-block;
    margin-right: 9px;
    color: #8091a2;
    font-size: 12px;
    opacity: 0.6;
`;

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
        posted {this.props.review.creationDate} seconds ago
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