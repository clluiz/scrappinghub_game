import React, { Component } from 'react';
import './App.css';
import Bomb from './components/Bomb/Bomb';
import getRandomColor from './colors';
import generateRandomNumberBetween from './util';
import './constants';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bombs: [{key: 1, color: getRandomColor(), left: generateRandomNumberBetween(80,520), top: generateRandomNumberBetween(80, 520) },
        {key: 2, color: getRandomColor(), left: generateRandomNumberBetween(80,520), top: generateRandomNumberBetween(80, 520) },
        {key: 3, color: getRandomColor(), left: generateRandomNumberBetween(80,520), top: generateRandomNumberBetween(80, 520) }],
      bins: [],
      score: 0
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Board">
          {
              this.state.bombs.map((item) => (
                  <Bomb key={item.key} color={item.color} left={item.left} top={item.top}/>
              ))
          }
        </div>
        {/* <Bin color={getRandomColor()} size="100px" onDrop={this.onDropBomb}/> */}
      </div>
    );
  }
}

export default App;
