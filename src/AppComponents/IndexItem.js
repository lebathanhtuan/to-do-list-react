import React, { Component } from 'react';
import './../style.css';

class IndexItem extends Component {
    render() {
        return (
            <td>{this.props.indexItem}</td>
        );
    }
}

export default IndexItem;
