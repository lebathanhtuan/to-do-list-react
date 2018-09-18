import React, { Component } from 'react';
import './../style.css';
import IndexItem from './IndexItem';
import NameItem from './NameItem';

class ListItem extends Component {
    render() {
        return (
            <tr>
                <IndexItem indexItem={this.props.indexItem}/>
                <NameItem nameItem={this.props.listItem.name}/>
                <td></td>
            </tr>
        );
    }
}

export default ListItem;
