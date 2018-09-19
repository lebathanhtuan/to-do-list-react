import React, { Component } from 'react';
import './style.css';
import ListToDo from './AppComponents/ListToDo';
import AddContent from './AppComponents/AddContent';

class App extends Component {
    constructor(){
        super();
        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            listToDo : [
                {
                    name: 'Nộp bài cho anh Chiến đẹp trai'
                },
                {
                    name: 'Pha cà phê cho anh Chiến'
                },
                {
                    name: 'Làm bài tập React'
                }
            ]
        }
    }

    addItem(value){
        var listToDo = this.state.listToDo;
        var newListToDo = listToDo.concat(value);
        this.setState({
            listToDo: newListToDo
        })
    }

    editItem(id, value){
        var listToDo = this.state.listToDo;
        listToDo[id] = value;
        this.setState({
            listToDo : listToDo
        })
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
                <AddContent addItem={this.addItem}/>
                <div className="container-showlist">
                    <ListToDo 
                        showListToDo={this.state.listToDo} 
                        deleteItem={this.deleteItem}
                        editItem={this.editItem}
                    />
                </div>
            </div>
        );
    }
}

export default App;
