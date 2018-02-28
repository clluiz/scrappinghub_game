import React, { Component } from 'react';
import Bomb from './components/Bomb/Bomb';
import Bin from './components/Bin/Bin';
import Score from './components/Score/Score';
import Counter from './components/Counter/Counter';
import { BOMB_SIZE, BOARD_HEIGHT, BOARD_WIDTH } from './constants';
import generateRandomNumberBetween from './util';
import * as colors from './colors';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bombs: [],
      bins: [
        { key: 1, color: colors.RED, size: 100 },
        { key: 2, color: colors.GREEN, size: 100 },
        { key: 3, color: colors.BLUE, size: 100 }
      ],
      score: 0,
      timeleft: 40,
      bombCreationInterval: 5000
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
            b.size = prevState.bins[i].size + 1;
          }
        })        
        return { 
          score: prevState.score + 1, 
          bombs: bombs,
          bins: prevState.bins
          } 
      }, this.swapBinColors());
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

  componentDidMount() {
    this.createBomb();
    this.createInterval();

    this.gameTime = setTimeout(() => {
      this.finishGame();
      clearInterval(this.gameTime);
    },120000);

    this.timerTimer = setInterval(
      () => this.setState((prevState) => {
        return {bombCreationInterval: prevState.bombCreationInterval - 450}
      }, () => this.createInterval()), 10000
    )
  }  

  createInterval() {
    this.timer = setInterval(
      () => this.createBomb(),
      this.state.bombCreationInterval
    );
  }

  createBomb() {
    this.setState(prevState => {
      return {
        bombs: prevState.bombs.concat([{
          key: `${new Date().getTime() + Math.floor(Math.random() * 10)}`, 
          color: colors.getRandomColor(), 
          left: generateRandomNumberBetween(BOMB_SIZE, BOARD_WIDTH - BOMB_SIZE), 
          top: generateRandomNumberBetween(BOMB_SIZE, BOARD_HEIGHT - BOMB_SIZE)
        }])
      }
    })
  }

  finishGame() {
    alert(`GAME OVER! Your score is ${this.state.score}`);
    clearInterval(this.gameTime);
    clearInterval(this.timer);
    clearInterval(this.timerTimer);
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
        <Counter interval="40" onTimeout={this.swapBinColors} />
      </div>
    );
  }
}

export default App;
