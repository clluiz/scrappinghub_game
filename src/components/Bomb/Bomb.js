import React, { Component } from 'react';
import '../../colors';
import './Bomb.css';
import getRandomColor from '../../colors';

const MAX_LIFE_TIME = 10;
const MIN_LIFE_TIME = 5;

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

    render() {
        return (
            <div draggable="true" className="Bomb" style={this.state.style}>  
                {this.state.duration}  
            </div>
        )
    }
}

export default Bomb;