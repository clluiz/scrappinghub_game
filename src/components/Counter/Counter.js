import React, { Component } from 'react';

const style = {
    textAlign: 'right',
    width: '600px'
}

export default class Counter extends Component {

    render() {
        return (
            <p style={style}>Change in {this.props.timeleft}</p>
        )
    }
}