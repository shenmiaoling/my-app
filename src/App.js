import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import Loader from './Loader'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
        <Loader/>
      </div>
    );
  }
}

export default App;
