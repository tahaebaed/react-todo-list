import React, { Component } from 'react';
import './App.css';
import TodoTask from './Components/TodoTask/TodoTask';
import AddTask from './Components/AddTask/AddItem';
class App extends Component {
  state = {
    tasks: [{ id: 1, taskname: 'This is your first Task', progress: false }],
  };

  deleteTask = taskId => {
    let tasks = this.state.tasks.filter(task => task.id !== taskId);
    this.setState({ tasks });
  };

  addNewTask = task => {
    let tasks = this.state.tasks;
    tasks.push(task);
    this.setState({
      tasks,
    });
  };
  render() {
    return (
      <div className='App container'>
        <h1>Todo List App</h1>
        <AddTask addTask={this.addNewTask} />
        <TodoTask tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
