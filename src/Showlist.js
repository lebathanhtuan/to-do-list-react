import React, { Component } from 'react';
import './style.css';

class Showlist extends Component {
    render() {
        var showListProps = this.props.showList.map((list, index) => {
            return (
                <tr key={index}>
                    <td>{index}</td>
                    <td>{list.name}</td>
                    <td></td>
                </tr>
            )
        });
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>To-do</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {showListProps}
                </tbody>
            </table>
        );
    }
}

export default Showlist;
