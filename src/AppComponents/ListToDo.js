import React, { Component } from 'react';
import './../style.css';
import ListItem from './ListItem';

class ListToDo extends Component {
    render() {
        var showList = this.props.showListToDo.map((list, index) => {
            return (
                <ListItem 
                    key={index} 
                    indexItem={index} 
                    listItem={list.name} 
                    deleteItem={this.props.deleteItem}
                    editItem={this.props.editItem}
                />
            )
        });
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>To-do</th>
                        <th className="text-right action">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {showList}
                </tbody>
            </table>
        );
    }
}

export default ListToDo;
