import React, { Component } from 'react';
import './../style.css';

class DeleteItem extends Component {
    render() {
        return (
            <td>
                <button className="btn btn-outline-danger" onClick={() => this.props.deleteItem(this.props.idItem)}>X</button>
            </td>
        );
    }
}

export default DeleteItem;
