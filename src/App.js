import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SwipeView from'./SwipeView.js';
import SwipeViewTabs from'./SwipeViewTabs.js';

import Sidebar from 'react-sidebar';
import MaterialTitlePanel from './MaterialTitlePanel';
import SidebarContent from './SideBarContent'

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};

class App extends Component {
  constructor(props, context){
    super(props, context)
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.menuButtonClick = this.menuButtonClick.bind(this);
    this.state = {
      sidebarOpen: false
    }
  }
  menuButtonClick(ev) {
    ev.preventDefault();
    this.onSetSidebarOpen(!this.state.sidebarOpen);
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  render() {
    const sidebarContent = <SidebarContent />;

    const contentHeader = (
    <span>
       <a onClick={this.menuButtonClick} href="#" style={styles.contentHeaderMenuLink}>=</a>
      <span> React Sidebar</span>
    </span>);

    return (
      <Sidebar sidebar={sidebarContent}
               open={this.state.sidebarOpen}
               onSetOpen={this.onSetSidebarOpen}>
        <MaterialTitlePanel title={contentHeader}>
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
        </MaterialTitlePanel>
      </Sidebar>
    
    );
  }
}

export default App;
