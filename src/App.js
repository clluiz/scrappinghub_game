import React, { Component } from 'react';
import './App.css';
import Bomb from './components/Bomb/Bomb';
import getRandomColor from './colors';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bombs: [{key: 1, color: getRandomColor() }],
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
                  <Bomb key={item.key} color={item.color}/>
              ))
          }
        </div>
        {/* <Bin color={getRandomColor()} size="100px" onDrop={this.onDropBomb}/> */}
      </div>
    );
  }
}

export default App;
