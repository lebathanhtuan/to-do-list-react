import React, { Component } from 'react';
import './style.css';
import ListToDo from './AppComponents/ListToDo';

class App extends Component {
    constructor(){
        super();
        this.deleteItem = this.deleteItem.bind(this);
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
    
    deleteItem(id){
        var listToDo = this.state.listToDo;
        listToDo.splice(id, 1);
        this.setState({
            listToDo : listToDo
        })
    }

    render() {
        return (
            <div className="container mt-4">
                <h3>To-Do List</h3>
                <div></div>
                <div className="container-showlist">
                    <ListToDo showListToDo={this.state.listToDo} deleteItem={this.deleteItem}/>
                </div>
            </div>
        );
    }
}

export default App;
