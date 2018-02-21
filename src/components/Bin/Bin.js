import React, { Component } from 'react';
import getRandomColor from '../../colors';

class Bin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{backgroundColor: this.props.color, width: this.props.size, height: this.props.size}}>            
            </div>
        )
    }
}

export default Bin;