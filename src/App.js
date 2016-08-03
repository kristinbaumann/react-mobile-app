import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SwipeView from'./SwipeView.js';
import SwipeViewTabs from'./SwipeViewTabs.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Swipeable View:
        </p>
        <SwipeView />
        <p className="App-intro">
          Swipeable View with tabs:
        </p>
        <SwipeViewTabs />
        <p className="App-intro">
          Test Paragraph
        </p>
      </div>
    );
  }
}

export default App;
