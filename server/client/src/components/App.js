import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

import './components.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <BrowserRouter>
            <div>
              <Header />
              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />
              <Route path="/surveys/new" component={SurveyNew} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
// 1st arg is for mapStateToProps - which we aren't using,
// connect still allows us to access all our redux action creators as props
export default connect(
  null,
  actions
)(App);
