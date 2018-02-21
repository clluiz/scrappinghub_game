import React, { Component } from 'react';
import './App.css';
import Bomb from './components/Bomb/Bomb';
import Bin from './components/Bin/Bin';
import getRandomColor from './colors';

class App extends Component {

  constructor(props) {
    super(props);
  }

  onDropBomb(event, bin) {
    console.log(bin);
  }

  render() {
    return (
      <div className="App">
        <Bomb/>
        <Bin color={getRandomColor()} size="100px" onDrop={this.onDropBomb}/>
      </div>
    );
  }
}

export default App;
