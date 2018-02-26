import React, { Component } from 'react';
import './App.css';
import Bomb from './components/Bomb/Bomb';
import Bin from './components/Bin/Bin';
import Score from './components/Score/Score';
import Counter from './components/Counter/Counter';
import * as colors from './colors';
import generateRandomNumberBetween from './util';
import { BOMB_SIZE, BOARD_HEIGHT, BOARD_WIDTH } from './constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bombs: [{ key: 1, color: colors.getRandomColor(), left: generateRandomNumberBetween(BOMB_SIZE, BOARD_WIDTH - BOMB_SIZE), top: generateRandomNumberBetween(BOMB_SIZE, BOARD_HEIGHT - BOMB_SIZE) },
      { key: 2, color: colors.getRandomColor(), left: generateRandomNumberBetween(BOMB_SIZE, BOARD_WIDTH - BOMB_SIZE), top: generateRandomNumberBetween(BOMB_SIZE, BOARD_HEIGHT - BOMB_SIZE) },
      { key: 3, color: colors.getRandomColor(), left: generateRandomNumberBetween(BOMB_SIZE, BOARD_WIDTH - BOMB_SIZE), top: generateRandomNumberBetween(BOMB_SIZE, BOARD_HEIGHT - BOMB_SIZE) }],
      bins: [
        { key: 1, color: colors.RED, size: 100 },
        { key: 2, color: colors.GREEN, size: 100 },
        { key: 3, color: colors.BLUE, size: 100 }
      ],
      score: 0,
      timeleft: 40
    }
    this.handleDragStartBomb = this.handleDragStartBomb.bind(this);
    this.handleDropBomb = this.handleDropBomb.bind(this);
    this.handleBombDestroyed = this.handleBombDestroyed.bind(this);
    this.swapBinColors = this.swapBinColors.bind(this);
  }

  handleDragStartBomb(event, key) {
    this.setState({ selectedBomb: key });
  }

  handleDragEndBomb() {
    this.setState({ selectedBomb: undefined });
  }

  handleDropBomb(event, bin) {
    let bombs = this.state.bombs;
    let bomb = bombs.filter((b) => b.key === this.state.selectedBomb)[0];
    if (bomb && bomb.color === bin.color) {
      bombs = bombs.filter(b => b.key !== this.state.selectedBomb);
      this.setState(prevState => {
        prevState.bins.forEach((b,i) => {
          if(b.key === bin.id) {
            b.color = colors.getRandomColor(),
            b.size = prevState.bins[i].size + 10
          }
        })        
        return { 
          score: prevState.score + 1, 
          bombs: bombs,
          bins: prevState.bins
          } 
      });
    } else {
      this.setState(prevState => {
        return { score: prevState.score - 1 }
      });
    }
  }

  handleBombDestroyed(bomb) {
    this.setState((prevState) => {
      prevState.bombs.forEach((b) => { if (b.key === bomb.id) b.destroyed = true });
      return {
        bombs: prevState.bombs.filter((b) => b.key !== bomb.id),
        score: prevState.score - 1
      }
    });
  }

  swapBinColors() {
    let colors = this.state.bins.map(b => b.color);
    this.setState(prevState => {
      return {
        bins: prevState.bins.map((b, i) => ({ ...b, color: i === colors.length - 1 ? colors[0] : colors[i + 1] }))
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Score value={this.state.score} />
        <div className="Board">
          {
            this.state.bombs
              .filter((item) => !item.destroyed)
              .map((item) => (
                <Bomb id={item.key}
                  key={item.key}
                  color={item.color}
                  left={item.left}
                  top={item.top}
                  onDragStart={this.handleDragStartBomb}
                  onDragEnd={this.handleDragEndBomb}
                  onDestroy={this.handleBombDestroyed} />
              ))
          }
        </div>
        <div className="Bins">
          {
            this.state.bins.map((bin) => (
              <Bin id={bin.key} key={bin.key} color={bin.color} size={bin.size} onDrop={this.handleDropBomb} />
            ))
          }
        </div>
        <Counter interval="10" onTimeout={this.swapBinColors} />
      </div>
    );
  }
}

export default App;
