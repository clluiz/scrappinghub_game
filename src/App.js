import React, { Component } from 'react';
import './App.css';
import Bomb from './components/Bomb/Bomb';
import Bin from './components/Bin/Bin';
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
      bins: [
        {key: 1, color: getRandomColor(), size: '100px' },
        {key: 2, color: getRandomColor(), size: '100px' },
        {key: 3, color: getRandomColor(), size: '100px' }
      ],
      score: 0
    }
    this.handleDragStartBomb = this.handleDragStartBomb.bind(this);
    this.handleDropBomb = this.handleDropBomb.bind(this);
  }

  handleDragStartBomb(event, key) {
    this.setState({selectedBomb: key});
  }

  handleDragEndBomb() {
    this.setState({selectedBomb: undefined});
  }

  handleDropBomb(event, bin) {
  
    let bombs = this.state.bombs;
    let bomb = bombs.filter((b) => b.key === this.state.selectedBomb)[0];
    if(bomb && bomb.color === bin.color) {
      bombs = bombs.filter(b => b.key !== this.state.selectedBomb);
      this.setState({bombs: bombs});
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Board">
          {
              this.state.bombs.map((item) => (
                  <Bomb id={item.key} key={item.key} color={item.color} left={item.left} top={item.top} onDragStart={this.handleDragStartBomb} onDragEnd={this.handleDragEndBomb}/>
              ))
          }
        </div>
        <div>
          {
              this.state.bins.map((bin) => (
                <Bin id={bin.key} key={bin.key} color={bin.color} size={bin.size} onDrop={this.handleDropBomb}/>
              ))
          }
        </div>
      </div>
    );
  }
}

export default App;
