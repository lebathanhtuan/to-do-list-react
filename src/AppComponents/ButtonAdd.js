import React, { Component } from 'react';
import './../style.css';

class InputAdd extends Component {
    render() {
        return (
            <button className="btn btn-outline-success" style={this.props.styleButtonAdd} onClick={this.props.onClickButtonAdd}>Thêm</button>
        );
    }
}

export default InputAdd;
