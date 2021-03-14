import React from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from 'react-router-dom';
import ReviewList from './components/reviewList.jsx';
// import styled from 'styled-components';

// const StyledButton = styled.button`
//   background-color: black;
//   font-size: 32px;
//   color: white;
// `;

var Component = () => {
  // Use it like any other component.
  return <StyledButton> Login </StyledButton>;
};

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
      <ReviewList reviews={this.state.reviews}/>
    );
  }
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <ReviewApp />
      </Route>
      <Route path="/:id">
        <ReviewApp />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('reviewApp')
);

// ReactDOM.render(<ReviewApp/>, document.getElementById('reviewApp'));