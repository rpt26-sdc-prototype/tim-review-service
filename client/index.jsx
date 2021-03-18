import React from 'react';
import ReactDOM from 'react-dom'
import ReviewApp from './components/reviewApp.jsx'

//HOW TO USE REACT-ROUTER-DOM, might use in proxy
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   useParams
// } from 'react-router-dom';

// ReactDOM.render(
//   <Router>
//     <Switch>
//       <Route exact path="/">
//         <ReviewApp />
//       </Route>
//       <Route path="/:id">
//         <ReviewApp />
//       </Route>
//     </Switch>
//   </Router>,
//   document.getElementById('reviewApp')
// );

window.ReviewApp = ReviewApp;

ReactDOM.render(<ReviewApp/>, document.getElementById('reviewApp'));