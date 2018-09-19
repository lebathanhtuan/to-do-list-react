import React, { Component } from 'react';
import './../style.css';

class AddItem extends Component {
    constructor(){
        super();
        this.getNameItem = this.getNameItem.bind(this);
        this.state = {
            nameItem: [
                {
                    name: ''
                }
            ]
        }
    }
    getNameItem(e){
        var value = e.target.value;
        this.setState({
            nameItem: [
                {
                    name: value
                }
            ]
        })
    }
    render() {
        return (
            <div className="form-inline" style={this.props.styleInputAdd}>
                <input 
                    type="text" 
                    className="form-control" 
                    name="nameItem"
                    value={this.state.nameItem.name}
                    onChange={this.getNameItem}
                />
                <button className="btn btn-outline-success ml-2" onClick={() => this.props.onClickButtonSubmit(this.state.nameItem)}>Xác nhận</button>
                <button className="btn btn-outline-danger ml-2" onClick={this.props.onClickButtonCancel}>Hủy</button>
            </div>
        );
    }
}

export default AddItem;
