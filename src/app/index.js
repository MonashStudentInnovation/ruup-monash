import React, { Component } from 'react';
import {
  Route,
  Router,
  Switch
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import history from './history'
import HomePage from '../components/Pages/Home/'
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <header className="App-header">  
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
