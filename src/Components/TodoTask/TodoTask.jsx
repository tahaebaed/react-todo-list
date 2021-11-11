import React, { Component } from 'react';
import './TodoTask.css';
class TodoTask extends Component {
  render() {
    const tableRow = 'table__row';

    const { tasks, deleteTask } = this.props;
    const length = tasks.length;
    const task = length ? (
      tasks.map(task => {
        return (
          <tr className={tableRow} key={Math.random()}>
            <td className='Padd'>{task.taskname}</td>

            <td className='🤖'>
              <button className='task__btn' onClick={() => deleteTask(task.id)}>
                X
              </button>
            </td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td className='🤖' colspan='2'>
          <h3>There is no task to show</h3>
        </td>
      </tr>
    );

    return (
      <div>
        <table>
          <thead className='table__header'>
            <tr>
              <th className='ts'>Task Name</th>
              <th> Delete </th>
            </tr>
          </thead>
          <tbody>{task}</tbody>
        </table>
      </div>
    );
  }
}

export default TodoTask;
