import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], text: '' };
  }
  
  removeTodo(index) {
    const { todos } = this.state;
    todos.splice(index, 1);
    this.setState({ todos });
  }

  onInputChange(event) {
    this.setState({ text: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const todos = this.state.todos;
    todos.push(this.state.text);
    this.setState({
      todos: todos,
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.onInputChange.bind(this)}
          />
          <button type="submit">Save</button>
        </form>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                index={index}
                content={todo}
                removeTodo={this.removeTodo.bind(this)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
