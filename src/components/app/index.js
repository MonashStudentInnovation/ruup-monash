import React, { Component } from 'react';
import {
  Route,
  Router,
  Switch
} from 'react-router-dom'
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import HeaderBar from '../HeaderBar';
import history from './history'
import HomePage from '../Pages/Home/'
import Footer from '../containers/Footer/'
import { init as firebaseInit } from './firebase';

import * as actions from '../../actions';

class App extends Component {
  constructor(props) {
    super(props);
    firebaseInit();

    this.props.getServices();
  }

  render() {
    return (
        <Router history={history}>
          <div className="App" style={{display: "flex", flexDirection: "column", height: '100%'}}>
            <HeaderBar />
            <div style={{flex: 1}}>
              <Switch>
                <Route exact path="/" component={HomePage} />
              </Switch>
            </div>
            <Footer/>
          </div>
        </Router>
    );
  }
}

export default connect(null, actions)(App);
