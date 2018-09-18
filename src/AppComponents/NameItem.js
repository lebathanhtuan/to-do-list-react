import React, { Component } from 'react';
import './../style.css';

class NameItem extends Component {
    render() {
        return (
            <td>{this.props.nameItem}</td>
        );
    }
}

export default NameItem;
