import React, { Component } from 'react';
import './Bomb.css';
import generateRandomNumberBetween from '../../util';

const MAX_LIFE_TIME = 10;
const MIN_LIFE_TIME = 5;

const timerStyle = {
    height: '20px',
    width: '20px',
    backgroundColor: '#FFFF00',
    position: 'relative',
    left: '50px',
    top: '-5px',
    borderRadius: '50%',
    padding: '5px'
}

class Bomb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            duration: generateRandomNumberBetween(MIN_LIFE_TIME, MAX_LIFE_TIME),
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
                <div draggable="true" className="Bomb" 
                    style={{backgroundColor: this.props.color, left: this.props.left, top: this.props.top }}>   
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