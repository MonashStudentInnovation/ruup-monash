import React, { Component } from 'react';
import {
  Route,
  Router,
  Switch
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import history from './history'
import HomePage from '../Pages/Home/'
import Footer from '../containers/Footer/'
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App" style={{display: "flex", flexDirection: "column"}}>
          <header className="App-header">  
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div style={{flex: 1}}>
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
