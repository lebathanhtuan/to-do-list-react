import React, { Component } from 'react';
import './../style.css';
import IndexItem from './IndexItem';
import NameItem from './NameItem';
import DeleteItem from './DeleteItem';

class ListItem extends Component {
    render() {
        return (
            <tr>
                <IndexItem indexItem={this.props.indexItem+1}/>
                <NameItem nameItem={this.props.listItem.name}/>
                <DeleteItem idItem={this.props.indexItem} deleteItem={this.props.deleteItem}/>
            </tr>
        );
    }
}

export default ListItem;
