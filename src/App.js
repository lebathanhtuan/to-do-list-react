import React, { Component } from 'react';
import './style.css';
import Showlist from './Showlist';

class App extends Component {
    constructor(){
        super();
        this.state = {
            toDoList : [
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
        console.log(this.state.toDoList);
        return (
            <div className="container mt-4">
                <h3>To-Do List</h3>
                <div></div>
                <div className="container-showlist">
                    <Showlist showList={this.state.toDoList}/>
                </div>
            </div>
        );
    }
}

export default App;
