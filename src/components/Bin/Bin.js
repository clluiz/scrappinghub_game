import React, { Component } from 'react';

class Bin extends Component {
    constructor(props) {
        super(props);
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDrop(event) {
        event.preventDefault();
        console.log('errou');
    }

    render() {
        return (
            <div onDrop={this.handleDrop}
                style={{backgroundColor: this.props.color, width: this.props.size, height: this.props.size}}>            
            </div>
        )
    }
}

export default Bin;