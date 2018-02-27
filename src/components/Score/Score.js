import React, { Component } from 'react';

export default class Score extends Component {

    render() {
        return (
            <p style={{textAlign: 'left'}}>
                Score: {this.props.value}
            </p>
        )
    }
}