import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './reviewList.jsx';

class ReviewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    console.log('component did mount');
    let currentURL = window.location.href;
    let splitArr = currentURL.split('/');
    let gameID = splitArr[splitArr.length - 1];
    console.log(gameID);

    fetch(`http://localhost:3000/reviews/${gameID}`)
      .then(response => response.json())
      .then(reviews => this.setState({ reviews }));
  }

  render() {
    return (
      <div>
        <ReviewList reviews={this.state.reviews}/>
      </div>
    );
  }
}

export default ReviewApp;