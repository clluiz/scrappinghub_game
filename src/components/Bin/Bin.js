import React, { Component } from 'react';

class Bin extends Component {
    constructor(props) {
        super(props);
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDrop(event) {
        event.preventDefault();
        this.props.onDrop(event, this.props);
    }

    allowDrop(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div onDrop={this.handleDrop} 
                 onDragOver={this.allowDrop}
                 style={{backgroundColor: this.props.color, width: this.props.size, height: this.props.size}}> 
            </div>
        )
    }
}

export default Bin;