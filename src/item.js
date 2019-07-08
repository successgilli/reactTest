import React from 'react';
import './css/item.css'

class Item extends React.Component{
    render(){
        return (
            <div className='item'>
                <div className= 'name'>{this.props.name}</div>
                <div className="plus" onClick={this.handleClick}>+</div>
            </div>
        )
    }
    handleClick = () => {
        this.props.delete(this.props.name)
    }
}
export default Item;