import React, { Component } from 'react';
import './../style.css';

class ListItem extends Component {
    constructor(props){
        super(props);
        this.onClickButtonEdit = this.onClickButtonEdit.bind(this);
        this.onClickButtonCancel = this.onClickButtonCancel.bind(this);
        this.getNameItem = this.getNameItem.bind(this);
        this.state = {
            displayDefault: 'inline-block',
            displayEdit: 'none',
            nameItem: {
                name: this.props.listItem.name
            }
        }
    }

    displayDefault(){
        return({
            display: this.state.displayDefault
        })
    }

    displayEdit(){
        return({
            display: this.state.displayEdit
        })
    }

    onClickButtonEdit(){
        this.setState({
            displayDefault: 'none',
            displayEdit: 'inline-block'
        })
    }

    onClickButtonSave(){
        this.setState({
            displayDefault: 'inline-block',
            displayEdit: 'none'
        })
    }

    onClickButtonCancel(){
        this.setState({
            displayDefault: 'inline-block',
            displayEdit: 'none'
        })
    }

    getNameItem(e){
        var value = e.target.value;
        this.setState({
            nameItem: {
                name: value
            }
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.indexItem+1}</td>
                <td>
                    <h6 style={this.displayDefault()}>{this.props.listItem}</h6>
                    <input 
                        type="text" 
                        className="form-control"
                        name="nameItemEdit"
                        value={this.state.nameItem.name}
                        style={this.displayEdit()}
                        onChange={this.getNameItem}
                    />
                </td>
                <td className="text-right">
                    <button 
                        className="btn btn-outline-success mr-2"
                        style={this.displayDefault()} 
                        onClick={this.onClickButtonEdit}
                    >
                        Sửa
                    </button>
                    <button 
                        className="btn btn-outline-success mr-2" 
                        style={this.displayEdit()}
                        onClick={() => {this.props.editItem(this.props.indexItem, this.state.nameItem); this.onClickButtonSave()}}
                    >
                        Lưu
                    </button>
                    <button 
                        className="btn btn-outline-danger mr-2" 
                        style={this.displayEdit()} 
                        onClick={this.onClickButtonCancel}
                    >
                        Hủy
                    </button>
                    <button 
                        className="btn btn-outline-danger" 
                        onClick={() => this.props.deleteItem(this.props.indexItem)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default ListItem;
