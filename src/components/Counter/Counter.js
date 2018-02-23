import React, { Component } from 'react';

const style = {
    textAlign: 'right',
    width: '600px',
    margin: '0 auto'
}

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timeleft: this.props.interval
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tickCounter(),
            1000
        );
    }

    tickCounter() {
        this.setState(prevState => {
            return { timeleft: prevState.timeleft - 1 };
        }, () => {
            if(this.state.timeleft < 0) {
                this.setState({ timeleft: this.props.interval });
            }
        });
    }

    render() {
        return (
            <p style={style}>Change in {this.state.timeleft}</p>
        )
    }
}