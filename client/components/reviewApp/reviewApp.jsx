import PrimaryReviewList from '../primaryReviewList/primaryReviewList.jsx';
import SecondaryReviewList from '../secondaryReviewList/secondaryReviewList.jsx';
import ReviewTypeFilter from '../filters/reviewTypeFilter/reviewTypeFilter.jsx';
import PurchaseTypeFilter from '../filters/purchaseTypeFilter/purchaseTypeFilter.jsx'
import LanguageTypeFilter from '../filters/languageFilter/languageFilter.jsx'
import Pill from '../filters/pill.jsx'
import {
  ReviewAppContainer,
  Title,
  OverallReviews,
  ReviewStatistics,
  Rating,
  ReviewCount,
  Graph,
  FilteringOptions,
  ReviewType,
  PurchaseType,
  LanguageType,
  DateRange,
  PlayTime,
  DisplayAsType,
  SummaryDropDown,
  ShowGraph,
  CurrentFilters,
  RestulCount,
  PrimaryFilterResults,
  PrimaryReviewContainer,
  RecentReviews,
  RecentStatistics,
  RecentRating,
  RecentReviewCount,
  SecondaryReviewResults,
  SecondaryReviewContainer,
  FiltersDiv,
  DownArrow
} from './reviewApp.styles.jsx';
import React from 'react';
import axios from 'axios';

class ReviewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: [],
      reviews: [],
      helpfulReviews: [],
      showGraph: false,
      reviewType: 'All',
      purchaseType: 'All',
      totalReviewCount: 0,
      positiveReviewCount: 0,
      negativeReviewCount: 0,
      filteredReviewCount: 0
    };
  }

  filteredReviewCountLifter(filteredReviewCount) {
    this.setState({ filteredReviewCount })
  }

  componentDidMount() {
    let currentURL = window.location.href;
    let splitArr = currentURL.split('/');
    let gameID = splitArr[splitArr.length - 1];

    return axios(`reviews/${gameID}`)
      .then(({ data: reviews }) => {
        console.log(reviews);
        this.setState({ reviews })
        this.addHelpfulnessScore(reviews)
        this.getOverallReview()
      })
  }

  //sorts reviews by most helpful
  addHelpfulnessScore(reviews) {

    var quicksort = array => {
      if (array.length < 2) {
        return array
      }
      let pivotVal = array[0].helpfulScore;
      let pivotNode = array[0]
      let lessThanArr = []
      let moreThanArr = []

      for (let i = 1; i < array.length; i++) {
        if (array[i].helpfulScore > pivotVal) {
          moreThanArr.push(array[i])
        } else {
          lessThanArr.push(array[i])
        }
      }

      return quicksort(lessThanArr).concat(pivotNode, quicksort(moreThanArr))
    }

    var helpfulArrLowestFirst = quicksort(reviews)
    var helpfulArrHighestFirst = helpfulArrLowestFirst.slice(0).reverse()
    this.setState({ helpfulReviews: helpfulArrHighestFirst })
  }

  getOverallReview() {
    let recommendationCount = 0;
    let recommendationString = '';
    let totalReviewCount = this.state.reviews.length
    for (let i = 0; i < this.state.reviews.length; i++) {
      if (this.state.reviews[i].recommended) {
        recommendationCount++
      }
    }
    let percentRecommended = recommendationCount / this.state.reviews.length;
    if (percentRecommended >= .90) {
      recommendationString = 'Overwhelmingly Positive';
    } else if (percentRecommended >= .80) {
      recommendationString = 'Very Positive';
    } else if (percentRecommended >= .70) {
      recommendationString = 'Mostly Positive';
    } else if (percentRecommended >= .40) {
      recommendationString = 'Mixed';
    } else if (percentRecommended >= .20) {
      recommendationString = 'Mostly Negative';
    } else if (percentRecommended >= .10) {
      recommendationString = 'Very Negative';
    } else {
      recommendationString = 'Overwhelmingly Negative';
    }

    let negativeReviewCount = totalReviewCount - recommendationCount;
    this.setState({
      recommendationString,
      totalReviewCount,
      positiveReviewCount: recommendationCount,
      negativeReviewCount
    })
  }

  reviewFilterChange(value, name) {
    if (name === 'reviewType') {
      if (value === 'All') {
        this.setState({ reviewType: 'All' })
      } else if (value === 'Positive') {
        this.setState({ reviewType: 'Positive' })
      } else if (value === 'Negative') {
        this.setState({ reviewType: 'Negative' })
      }
    } else if (name === 'purchaseType') {
      if (value === 'All') {
        this.setState({ purchaseType: 'All' })
      } else if (value === 'Steam Purchases') {
        this.setState({ purchaseType: 'Steam Purchases' })
      } else if (value === 'Other') {
        this.setState({ purchaseType: 'Other' })
      }
    }
  }

  filterReset(event) {
    //remove Positive, Negative, Steam Purchase, Other Purchase filters
    if (event.target.innerText[0] === 'P' || event.target.innerText[0] === 'N') {
      this.setState({ reviewType: 'All' })
    } else if (event.target.innerText[0] === 'S' || event.target.innerText[0] === 'O') {
      this.setState({ purchaseType: 'All' })
    }
  }

  render() {
    //conditional render based on width
    //two review columns or 1

    //conditional render GET request to server fails

    var reviewCountObj = {
      All: this.state.totalReviewCount,
      Positive: this.state.positiveReviewCount,
      Negative: this.state.negativeReviewCount
    }

    return (
      <ReviewAppContainer>
        <Title className='title'>
          Customer Reviews
        </Title>
        <OverallReviews className='overallReviews'>
          Overall Reviews:
          <ReviewStatistics>
            <Rating>{this.state.recommendationString}</Rating>
            <ReviewCount>{`(${this.state.reviews.length} reviews)`}</ReviewCount>
            <img height='12px' width='12px' src="https://store.akamai.steamstatic.com/public/shared/images/ico/icon_questionmark.png"></img>
          </ReviewStatistics>
        </OverallReviews>
        <RecentReviews className='recentReviews'>
          Recent Reviews:
          <RecentStatistics>
            <RecentRating>Very Positive</RecentRating>
            <RecentReviewCount>{`(${this.state.helpfulReviews.length} reviews)`}</RecentReviewCount>
            <img height='12px' width='12px' src="https://store.akamai.steamstatic.com/public/shared/images/ico/icon_questionmark.png"></img>
          </RecentStatistics>
        </RecentReviews>
        {this.state.showGraph ? <Graph></Graph> : null}
        <FilteringOptions className='filteringOptions'>
          <ReviewType>
            <ReviewTypeFilter reviewCounts={reviewCountObj} reviewFilterChange={this.reviewFilterChange.bind(this)} />
          </ReviewType>
          <PurchaseType>
            <PurchaseTypeFilter reviewCounts={reviewCountObj} reviewFilterChange={this.reviewFilterChange.bind(this)} />
          </PurchaseType>
          <LanguageType>
            <LanguageTypeFilter />
          </LanguageType>
          <DateRange className='dateRange'>
            DATE RANGE <DownArrow>&#9662;</DownArrow>
          </DateRange>
          <PlayTime>
            PLAY TIME <DownArrow>&#9662;</DownArrow>
          </PlayTime>
          <DisplayAsType>
            DISPLAY AS: <DownArrow>&#9662;</DownArrow>
          </DisplayAsType>
        </FilteringOptions>
        <CurrentFilters>
          <FiltersDiv className='filtersDiv'>
            Filters:
          </FiltersDiv>
          {/* {this.state.reviewType === 'Positive' ? <span> Positive &#9447;</span> : null } */}
          {this.state.reviewType === 'Positive' ? <Pill filterReset={this.filterReset.bind(this)} filterType={this.state.reviewType} /> : null}
          {this.state.reviewType === 'Negative' ? <Pill filterReset={this.filterReset.bind(this)} filterType={this.state.reviewType} /> : null}
          {this.state.purchaseType === 'Steam Purchases' ? <Pill filterReset={this.filterReset.bind(this)} filterType={this.state.purchaseType} /> : null}
          {this.state.purchaseType === 'Other' ? <Pill filterReset={this.filterReset.bind(this)} filterType={this.state.purchaseType} /> : null}
        </CurrentFilters>
        <RestulCount>
          Showing reviews that match the filters above  ( Very Positive )
        </RestulCount>
        <PrimaryFilterResults>
          MOST HELPFUL REVIEWS  IN THE PAST 30 DAYS
        </PrimaryFilterResults>
        <PrimaryReviewContainer>
          <PrimaryReviewList filteredReviewCountLifter={this.filteredReviewCountLifter.bind(this)} purchaseType={this.state.purchaseType} reviewType={this.state.reviewType} reviews={this.state.helpfulReviews} />
        </PrimaryReviewContainer>
        <SecondaryReviewResults>
          RECENTLY POSTED
        </SecondaryReviewResults>
        <SecondaryReviewContainer>
          <SecondaryReviewList reviews={this.state.reviews} />
        </SecondaryReviewContainer>
      </ReviewAppContainer>
    );
  }
}

export default ReviewApp;
