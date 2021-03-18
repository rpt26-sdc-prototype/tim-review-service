import React from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PrimaryReviewList from './primaryReviewList.jsx';
import SecondaryReviewList from './secondaryReviewList.jsx';

const ReviewAppContainer = styled.div`
  border-style: solid;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  width: 960px;
  grid-template-columns: 620px 340px
  gird-template-rows: auto auto auto auto auto auto auto auto auto;
`;



const Title = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
`;

const OverallReviews = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;
`;

const ReviewStatistics = styled.div`
  display: flex;
`;

const Rating = styled.div`

`;

const ReviewCount = styled.div`

`;

const Graph = styled.div`
  grid-column-start: 1;
  grid-row-start: 4;
  grid-column-end: span 2;
`;

const FilteringOptions = styled.div`
  grid-column-start: 1;
  grid-row-start: 5;
  grid-column-end: span 2;
`;

const CurrentFilters = styled.div`
  grid-column-start: 1;
  grid-row-start: 6;
  grid-column-end: span 2;
`;

const RestulCount = styled.div`
  grid-column-start: 1;
  grid-row-start: 7;
`;

const PrimaryFilterResults = styled.div`
  grid-column-start: 1;
  grid-row-start: 8;
`;

const PrimaryReviewContainer = styled.div`
  grid-column-start: 1;
  grid-row-start: 9;
  justify-self: start;
`;

const RecentReviews = styled.div`
  grid-column-start: 2;
  grid-row-start: 2;
  padding-left: 5px;
`;

const RecentStatistics = styled.div`
  display: flex;
`;

const RecentRating = styled.div`

`;

const RecentReviewCount = styled.div`

`;

const SecondaryReviewResults = styled.div`
  grid-column-start: 2;
  grid-row-start: 8;
  padding-left: 5px;
`;

const SecondaryReviewContainer = styled.div`
  grid-column-start: 2;
  grid-row-start: 9;
  justify-self: end;
`;

class ReviewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: [],
      reviews: [],
      showGraph: false
    };
  }

  componentDidMount() {
    console.log('component did mount');
    let currentURL = window.location.href;
    let splitArr = currentURL.split('/');
    let gameID = splitArr[splitArr.length - 1];
    console.log(gameID);

    fetch(`http://localhost:4051/reviews/${gameID}`)
      .then(response => response.json())
      .then(reviews => this.setState({ reviews }));
  }

  render() {
    //conditional render based on width
      //two review columns or 1

    //conditional render GET request to server fails

    return (
      <ReviewAppContainer>
        <Title>
          Customer Reviews
        </Title>
        <OverallReviews>
          Overall Reviews:
          <ReviewStatistics>
            <Rating>Very Positive</Rating>
            <ReviewCount>Total number of reviews</ReviewCount>
          </ReviewStatistics>
        </OverallReviews>
        <RecentReviews>
          Recent Reviews:
          <RecentStatistics>
            <RecentRating>Very Positive</RecentRating>
            <RecentReviewCount> Total number of reviews</RecentReviewCount>
          </RecentStatistics>
        </RecentReviews>
        {this.state.showGraph ? <Graph></Graph> : null}
        <FilteringOptions>
          Review type Purchase type Language Date Range PlayTime Display As Show Graph
        </FilteringOptions>
        <CurrentFilters>
          Filters:
        </CurrentFilters>
        <RestulCount>
          Showing 65,288 reviews that match the filters above ( Very Positive )
        </RestulCount>
        <PrimaryFilterResults>
          MOST HELPFUL REVIEWS  IN THE PAST 30 DAYS
        </PrimaryFilterResults>
        <PrimaryReviewContainer>
          <PrimaryReviewList reviews={this.state.reviews}/>
        </PrimaryReviewContainer>
        <SecondaryReviewResults>
          RECENTLY POSTED
        </SecondaryReviewResults>
        <SecondaryReviewContainer>
          <SecondaryReviewList reviews={this.state.reviews}/>
        </SecondaryReviewContainer>
      </ReviewAppContainer>
    );
  }
}

export default ReviewApp;