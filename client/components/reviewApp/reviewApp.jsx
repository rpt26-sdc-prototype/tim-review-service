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
          Showing 65,288 reviews that match the filters above ( Very Positive )
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