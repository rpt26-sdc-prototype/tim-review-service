import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ReviewApp from '../client/components/reviewApp/reviewApp';
import PrimaryReview from '../client/components/primaryReview/PrimaryReview';
import SecondaryReview from '../client/components/secondaryReview/SecondaryReview';

enzyme.configure({ adapter: new Adapter() });

describe('Should render the Review component', () => {

  var fakeProps = {
    gameID: 1,
    userName: 'PwnNoobs',
    reviewText: 'great game, 10/10'
  }

  var wrapper = enzyme.shallow(<ReviewApp />, { disableLifecycleMethods: true });


  test('init test', (done) => {
    expect('hi').toBe('hi')
    expect(wrapper).toBeTruthy()
    // expect(wrapper.containsAllMatchingElements([<ReviewList />])).toBe(true);
    done();
  })
})

describe('Should render the PrimaryReview component', () => {

  var fakeProps = {
    gameID: 1,
    userName: 'PwnNoobs',
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
    expect(wrapper.find('.helpfulCount').text()).toEqual('31 people found this helpful');
    done();
  })
})