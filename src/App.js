import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Component/Menu.js';
import Home from './Component/Home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
           	<Menu/>
        </header>
        <Home/>
      </div>


    );
  }
}

export default App;
