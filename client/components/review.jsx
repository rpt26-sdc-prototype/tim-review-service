import styled from 'styled-components';
import React from 'react';

const Title = styled.div`
  /* color: #c1dbf4; */
  color: black;
  font-size: 13px;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: bold;
  padding-left: 5px;
`;

const Wrapper = styled.section`
  padding-left: 5px;
  background: papayawhip;
  border-style: solid;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  padding-bottom: 0px;
  margin-bottom: 20px;
`;

const UserSection = styled.div`
  width: 200px;
  display: flex;
`;

const ReviewSection = styled.div`
 width: 400px;
`;

const ReviewStack = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfilePicture = styled.div`
`;

const ProductCount = styled.div`
  font-size: 11px;
  padding-left: 5px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewCount = styled.div`
  font-size: 11px;
  padding: none;
`;

const RecommendedRow = styled.div`
  display: flex;
`;

const RecommendedInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const SteamIcon = styled.div`
  padding-top: 5 px;
  padding-left: 200px;
`;

class Review extends React.Component {
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
      <Wrapper>
        <User>
          <UserSection>
            <ProfilePicture>
              <img src={this.props.review.profilePicture} width="35" height="35" />
            </ProfilePicture>
            <UserInfo>
              <Title>{this.props.review.userName}</Title>
              <ProductCount>{this.props.review.gamesOwned} products in account</ProductCount>
            </UserInfo>
          </UserSection>
          <ReviewCount>{this.props.review.reviewsGiven} reviews</ReviewCount>
        </User>
        <ReviewSection>
          <ReviewStack>
            <RecommendedRow>
              <img src={imageURL} width="35" height="35" />
              <RecommendedInfo>
                <div>{recommendText}</div>
                <div>{this.props.review.playtime} hrs on record</div>
              </RecommendedInfo>
              <SteamIcon>
                <img src="https://gifbucket.s3-us-west-1.amazonaws.com/icon_review_steam.png" />
              </SteamIcon>
            </RecommendedRow>
            <br></br>
            <div>Posted: {creationDate} seconds ago</div>
            <br></br>
            <div>{reviewText}</div>
            <br></br>
            <div>Was this review helpful?</div>
            <div> Yes No Funny Award</div>
            <div>{helpfulCount} people found this review helpful</div>
          </ReviewStack>
        </ReviewSection>
      </Wrapper>
    );

  }
}

export default Review;