import React, { Component } from 'react';
import './App.css';
import Bomb from './components/Bomb/Bomb';
import Bin from './components/Bin/Bin';
import getRandomColor from './colors';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Bomb/>
        <Bin color={getRandomColor()} size="100px"/>
      </div>
    );
  }
}

export default App;
