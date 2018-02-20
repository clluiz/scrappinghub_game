import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bomb from './components/Bomb/Bomb';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bomb/>
      </div>
    );
  }
}

export default App;
