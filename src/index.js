import React from 'react';
import ReactDOM from "react-dom";
import Item from './item';
import Additem from './additem'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
require('./css/index.css');
import About from './about';

class App extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path='/about' component = {About}></Route>
                    <Route path='/' component = {Todolist}></Route>
                </Switch>
            </Router>
        )
    }
}

class Todolist extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items: ['armpit', "hairs", "love"]
        }
    }
    render(){
        const item = this.state.items.map((item, index) => <Item delete={this.handleDelete} name = {item} key={index}/>)
        console.log(this.state.items.length)
        if (this.state.items.length === 0){
            return(
                <div id="entry">
                    <p><Link to='/about'> about</Link></p>
                    <h1>Todolist app</h1>
                    <p>nothing to display...</p>
                    <Additem addItem={this.addItem}/>
                </div>
            )
        }
        return(
            <div id="entry">
                <p><Link to='/about'>about</Link></p>
                <h1>Todolist app</h1>
                <ul>{item}</ul>
                <Additem addItem={this.addItem}/>
            </div>
        )
    }
    handleDelete = (item) => {
        const newstate = this.state.items.filter(val => item !== val)
        this.setState({
            items: newstate
        })
    }
    addItem = (item) => {
        const newstate = this.state.items;
        newstate.push(item);
        this.setState({
            items: newstate
        })
    }
}

ReactDOM.render(<App/>, document.getElementById('todolist'))
