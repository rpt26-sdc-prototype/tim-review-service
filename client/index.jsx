import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import ReviewList from './components/reviewList.jsx';

class ReviewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    let currentURL = window.location.href;
    let splitArr = currentURL.split('/');
    let gameID = splitArr[splitArr.length - 1];
    console.log(gameID);

    fetch(`http://localhost:3001/reviews/${gameID}`)
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