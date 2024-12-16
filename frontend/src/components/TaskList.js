import React from 'react';

const TaskList = ({ tasks, onDeleteTask, onEditTask }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task._id} className="task-item">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>
          <p>Due Date: {task.dueDate}</p>
          <div className='button-container'>
          <button onClick={() => onEditTask(task)} className="btn btn-edit">Edit</button>
          <button onClick={() => onDeleteTask(task._id)} className="btn btn-delete">Delete</button>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default TaskList;
