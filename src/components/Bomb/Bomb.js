import React, { Component } from 'react';
import '../../colors';
import './Bomb.css';
import getRandomColor from '../../colors';

const MAX_LIFE_TIME = 10;
const MIN_LIFE_TIME = 5;

const timerStyle = {
    height: '20px',
    width: '20px',
    backgroundColor: '#FFFF00',
    position: 'relative',
    left: '60px',
    top: '-10px',
    borderRadius: '50%',
    padding: '5px'
}

class Bomb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            duration: Math.floor(Math.random() * (MAX_LIFE_TIME - MIN_LIFE_TIME + 1)) + MIN_LIFE_TIME,
            style: {
                backgroundColor: getRandomColor()
            }
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({ duration: this.state.duration - 1});
    }

    render() {

        if(this.state.duration > 0) {
            return (
                <div draggable="true" className="Bomb" style={this.state.style}>   
                    <div style={timerStyle}>
                        {this.state.duration}
                    </div>
                </div>
            )
        } else {
            return null;
        }

    }
}

export default Bomb;