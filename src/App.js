import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import H1 from './Component'
import Count from './Count'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Count/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>helloooo</p>
        <H1/>
      </div>
    );
  }
}

export default App;
