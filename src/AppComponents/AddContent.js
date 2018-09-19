import React, { Component } from 'react';
import './../style.css';
import ButtonAdd from './ButtonAdd';
import AddItem from './AddItem';

class AddContent extends Component {
    constructor(props){
        super(props);
        this.onClickButtonAdd = this.onClickButtonAdd.bind(this);
        this.onClickButtonCancel = this.onClickButtonCancel.bind(this);
        this.state = {
            displayButtonAdd: 'block',
            displayInputAdd: 'none'
        }
    }
    onClickButtonAdd(){
        this.setState({
            displayButtonAdd: 'none',
            displayInputAdd: 'block'
        })
    }
    onClickButtonCancel(){
        this.setState({
            displayButtonAdd: 'block',
            displayInputAdd: 'none'
        })
    }
    displayButtonAdd(){
        return({
            display: this.state.displayButtonAdd
        });
    }
    displayInputAdd(){
        return({
            display: this.state.displayInputAdd
        });
    }
    render() {
        return (
            <div className="mt-4 mb-4">
                <ButtonAdd 
                    styleButtonAdd={this.displayButtonAdd()} 
                    onClickButtonAdd={this.onClickButtonAdd}
                />
                <AddItem 
                    styleInputAdd={this.displayInputAdd()} 
                    onClickButtonCancel={this.onClickButtonCancel} 
                    onClickButtonSubmit={this.props.addItem}
                />
            </div>
        );
    }
}

export default AddContent;
