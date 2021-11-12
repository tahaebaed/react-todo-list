import React, { Component } from 'react';
import './AddItem.css';

class AddTask extends Component {
  state = {
    id: Math.random(),
    taskname: '',
    progress: false,
  };

  handleChange = e => this.setState({ [e.target.id]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();

    this.props.addTask(this.state);
    this.setState({
      id: Math.random(),
      taskname: '',
      progress: false,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Enter Task Name...'
            id='taskname'
            value={this.state.taskname}
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
