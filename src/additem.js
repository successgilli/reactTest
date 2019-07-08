import React from 'react';
import './css/additem.css';

class Additem extends React.Component{
    render(){
        return(
        <form id="additem" onSubmit={this.handleAdditem}>
            <input  type = "text" id='inputt' required></input>
            <input type = "submit" id='btn'></input>
        </form>
        )
    }
    handleAdditem = (e) => {
        e.preventDefault();
        this.props.addItem(document.getElementById('inputt').value)
        document.getElementById('inputt').value = '';
    }
}
export default Additem;