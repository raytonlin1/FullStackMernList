import React, { Component } from 'react'
import axios from 'axios';

export class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos : [],
             item : "",
             desc: ""
        }
    }

    changeHandler1 = (event) => {
        this.setState({item: event.target.value})
    }

    changeHandler2 = (event) => {
        this.setState({desc: event.target.value})
    }

    clickHandler = (event) => {
        event.preventDefault()
        console.log(this.state.item)
        axios({
            method: 'post',
            url: 'http://localhost:3000/',
            data: {
              todo: this.state.item,
              desc: this.state.desc
            }
          });
        this.setState({item:'', desc:''})
    }

    edit = (event) => {
        event.preventDefault()
        console.log(this.state.item)
        axios({
            method: 'put',
            url: 'http://localhost:3000/${event.obj._id}/update',
            data: {
              todo: this.state.item,
              desc: this.state.desc
            }
          });
        this.setState({item:'', desc:''})
    }

    delete = (event) => {
        event.preventDefault()
        console.log(this.state.item)
        axios({
            method: 'delete',
            url: 'http://localhost:3000/${event.obj._id}',
            data: {
              todo: this.state.item,
              desc: this.state.desc
            }
          });
    }

    componentDidMount() {
        axios.get('http://localhost:3000/').then((response) => {
            console.log(response.data.data)
            let data = [];
            console.log(response.data.data.length)
            for(var i =0; i < response.data.data.length; i++){
                data.push(response.data.data[i].todo + ': ' + response.data.data[i].desc)
            }
            this.setState({todos: data})
            this.setState({nextid: response.data.data.length})
        });
    }
    componentDidUpdate() {
        axios.get('http://localhost:3000/').then((response) => {
            console.log(response.data.data)
            let data = [];
            console.log(response.data.data.length)
            for(var i =0; i < response.data.data.length; i++){
                data.push(response.data.data[i].todo + ': ' + response.data.data[i].desc)
            }
            this.setState({todos: data})
        });
    }
  
    render() {
        
        return (
            <div>
                <input type="text" placeholder= 'name' onChange={this.changeHandler1}/>
                <input type="text" placeholder= 'description' onChange={this.changeHandler2}/>
                <button type="submit" onClick={this.clickHandler}>add</button>
                <div>
                    <ul>
                        {this.state.todos.map((todo, index) => 
                            <div>
                                <li key={index}>{todo} </li>
                                <button onClick={this.edit} obj={todo} key={index}>Edit</button>
                                <button onClick={this.delete} obj={todo} key={index}>Delete</button>
                            </div>
                        )}</ul>
                </div>
            </div>
        )
    }
}

export default Todo

