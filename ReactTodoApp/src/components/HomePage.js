"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
  getInitialState: function(){
    return {todos:[], todo:''};
  },
  handleChange: function(event){
    this.setState({todo:event.target.value});
  },
  handleClick: function(){
    this.state.todos.push({name:this.state.todo, complete:false});
    this.setState({todos:this.state.todos, todo:''});
    console.log(this.state.todos);
  },
  markAsInComplete: function(index){
      var Mytodos = this.state.todos;
      Mytodos[index].complete = false;
      this.setState({todos:Mytodos});
  },
  markAsComplete: function(index){
    var Mytodos = this.state.todos;
    Mytodos[index].complete = true;
    this.setState({todos:Mytodos});
  },
  render: function(){
    return (
      <div>
        <h1>Todo App</h1>
        <div className="form-group">
          <label>Enter Todo:</label>
          <input type="text" className="form-control" onChange={this.handleChange} value={this.state.todo}/><br/>
          <button type="button" className="btn btn-primary" onClick={this.handleClick}>Add Todo</button>
        </div>
        <h2>Todos</h2>
        <table className="table table-striped">
          <thead>
            <th>Item</th>
          </thead>
          <tbody>
              {this.state.todos.map((todo, index) =>{
                return (
                  <tr key={todo.name}>
                    <td><span style={{textDecoration:todo.complete?'line-through':''}}>{todo.name}</span></td>
                    <td>
                    {todo.complete ?
                      <button type="button" className="btn btn-primary"
                        onClick={this.markAsInComplete.bind(this,index)}>In-Complete</button> :
                        <button type="button" className="btn btn-primary"
                          onClick={this.markAsComplete.bind(this,index)} style={{marginRight: '5px'}}>Complete</button>
                      }
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = Home;
