import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import Loader from './Loader'
import Tabbar from './Tabbar'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
        <Loader/>
        <Tabbar/>
      </div>
    );
  }
}

export default App;
