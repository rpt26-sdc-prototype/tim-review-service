import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ReviewApp from '../client/components/reviewApp/reviewApp';
import PrimaryReview from '../client/components/primaryReview/PrimaryReview';
import SecondaryReview from '../client/components/secondaryReview/SecondaryReview';

enzyme.configure({ adapter: new Adapter() });

describe('Should render the PrimaryReview component', () => {

  var fakeProps = {
    gameID: 1,
    userName: 'Player1',
    reviewText: 'great game, 10/10',
    creationDate: 1616177871584,
    recommended: 1,
    helpfulCount: 31,
    notHelpfulCount: 5,
    helpfulScore: 86,
    funnyCount: 2,
    earlyAccess: 0,
    awards: 12,
    comments: 0,
    profilePicture: "https://gifbucket.s3.us-west-1.amazonaws.com/0e2f75ab98b7bbb1a4c72dd7446099d7.jpg",
    userTheme: 6,
    steamLevel: 94,
    reviewsGiven: 2,
    playtime: 59,
    productActivation: 1,
    gamesOwned: 14
  }

  var wrapper = enzyme.shallow(<PrimaryReview review={fakeProps}/>, { disableLifecycleMethods: true });


  test('primary review helpfulness', (done) => {
    expect(wrapper).toBeTruthy()
    expect(wrapper.find('.username').text()).toEqual('Player1');
    expect(wrapper.find('.reviewText').text()).toEqual('great game, 10/10');
    expect(wrapper.find('.helpfulCount').text()).toEqual('31 people found this helpful');
    expect(wrapper.find('.timeplayed').text()).toEqual('59 hrs on record');
    expect(wrapper.find('.productCount').text()).toEqual('14 products in account');
    expect(wrapper.find('.recommendation').text()).toEqual('Recommended');
    done();
  })
})


describe('Should render the SecondaryReview component', () => {

  var fakeProps = {
    gameID: 2,
    userName: 'Player2',
    reviewText: 'Ok game, 7/10',
    creationDate: 1616177871584,
    recommended: 1,
    helpfulCount: 31,
    notHelpfulCount: 5,
    helpfulScore: 86,
    funnyCount: 2,
    earlyAccess: 0,
    awards: 12,
    comments: 0,
    profilePicture: "https://gifbucket.s3.us-west-1.amazonaws.com/0e2f75ab98b7bbb1a4c72dd7446099d7.jpg",
    userTheme: 6,
    steamLevel: 94,
    reviewsGiven: 2,
    playtime: 9,
    productActivation: 1,
    gamesOwned: 14
  }

  var wrapper = enzyme.shallow(<SecondaryReview review={fakeProps}/>, { disableLifecycleMethods: true });


  test('primary review helpfulness', (done) => {
    expect(wrapper).toBeTruthy()
    expect(wrapper.find('.secondaryUserName').text()).toEqual('Player2');
    expect(wrapper.find('.secondaryReviewText').text()).toEqual('Ok game, 7/10');
    expect(wrapper.find('.helpful').text()).toEqual('Helpful?');
    expect(wrapper.find('.secondaryTimePlayed').text()).toEqual('9 hrs');
    done();
  })
})

describe('Should render the Review component', () => {

  var fakeProps = {
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
  }

  var wrapper = enzyme.shallow(<ReviewApp initState={fakeProps}/>, { disableLifecycleMethods: true });


  test('ReviewApp', (done) => {
    expect(wrapper).toBeTruthy()
    expect(wrapper.find('.title').text()).toEqual('Customer Reviews');
    expect(wrapper.find('.filtersDiv').text()).toEqual('Filters:');
    expect(wrapper.find('.dateRange').text()).toEqual('DATE RANGE ▾');
    done();
  })
})