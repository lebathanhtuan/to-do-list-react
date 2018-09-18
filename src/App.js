import React, { Component } from 'react';
import './style.css';
import ListToDo from './AppComponents/ListToDo';

class App extends Component {
    constructor(){
        super();
        this.state = {
            listToDo : [
                {
                    id: 1,
                    name: 'A'
                },
                {
                    id: 2,
                    name: 'B'
                },
                {
                    id: 3,
                    name: 'C'
                }
            ]
        }
    }
    render() {
        return (
            <div className="container mt-4">
                <h3>To-Do List</h3>
                <div></div>
                <div className="container-showlist">
                    <ListToDo showListToDo={this.state.listToDo}/>
                </div>
            </div>
        );
    }
}

export default App;
