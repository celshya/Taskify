import React from 'react';
import "../styles/taskItem.css"
const TaskItem = ({ task, onDeleteTask }) => {
    console.log(task.id)
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><strong>Status:</strong> {task.status}</p>

      <button 
        className="btn btn-danger" 
        onClick={() => onDeleteTask(task._id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
