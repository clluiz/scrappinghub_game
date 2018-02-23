import React, { Component } from 'react';

export default class Score extends Component {

    render() {
        return (
            <p>
                Score: {this.props.value}
            </p>
        )
    }
}