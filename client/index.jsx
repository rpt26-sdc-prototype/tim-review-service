import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import ReviewList from './components/reviewList.jsx';

// var About = (props) => {
//   const { id } = useParams();
//   return (
//     <div>
//       <h2>Now showing post {id}</h2>
//     </div>
//   );
// };

class ReviewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }



  componentDidMount() {
    // let { id } = useParams();
    // console.log(id);

    fetch('http://localhost:3001/reviews/1')
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