import PrimaryReviewList from '../primaryReviewList/primaryReviewList.jsx';
import SecondaryReviewList from '../secondaryReviewList/secondaryReviewList.jsx';
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
  SecondaryReviewContainer
} from './reviewApp.styles.jsx';

class ReviewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: [],
      reviews: [],
      helpfulReviews: [],
      showGraph: false
    };
  }

  componentDidMount() {
    console.log('component did mount');
    let currentURL = window.location.href;
    let splitArr = currentURL.split('/');
    let gameID = splitArr[splitArr.length - 1];
    // console.log(gameID);

    fetch(`/reviews/${gameID}`)
      .then(response => response.json())
      .then(reviews => {
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

      let pivotVal = array[0].helpfulScore
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

    this.setState({ recommendationString })

  }

  render() {
    //conditional render based on width
      //two review columns or 1

    //conditional render GET request to server fails
    console.log(this.state)

    return (
      <ReviewAppContainer>
        <Title>
          Customer Reviews
        </Title>
        <OverallReviews>
          Overall Reviews:
          <ReviewStatistics>
            <Rating>{this.state.recommendationString}</Rating>
            <ReviewCount>{this.state.reviews.length} reviews</ReviewCount>
          </ReviewStatistics>
        </OverallReviews>
        <RecentReviews>
          Recent Reviews:
          <RecentStatistics>
            <RecentRating>Very Positive</RecentRating>
            <RecentReviewCount>{this.state.helpfulReviews.length} reviews</RecentReviewCount>
          </RecentStatistics>
        </RecentReviews>
        {this.state.showGraph ? <Graph></Graph> : null}
        <FilteringOptions>
          <ReviewType>
            REVIEW TYPE
          </ReviewType>
          <PurchaseType>
            PURCHASE TYPE
          </PurchaseType>
          <LanguageType>
            LANGUAGE
          </LanguageType>
          <DateRange>
            DATE RANGE
          </DateRange>
          <PlayTime>
            PLAY TIME
          </PlayTime>
          <DisplayAsType>
            DISPLAY AS:
          </DisplayAsType>
          <SummaryDropDown>
            Summary
          </SummaryDropDown>
          <ShowGraph>
            Show graph
          </ShowGraph>
        </FilteringOptions>
        <CurrentFilters>
          Filters:
        </CurrentFilters>
        <RestulCount>
          Showing {this.state.helpfulReviews.length} reviews that match the filters above ( Very Positive )
        </RestulCount>
        <PrimaryFilterResults>
          MOST HELPFUL REVIEWS  IN THE PAST 30 DAYS
        </PrimaryFilterResults>
        <PrimaryReviewContainer>
          <PrimaryReviewList reviews={this.state.helpfulReviews}/>
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