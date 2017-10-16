import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './Component/FirstComponent.js';
import Home from './Component/Home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
           	<FirstComponent/>
        </header>
        <Home/>
      </div>


    );
  }
}

export default App;
