import React, { useState, useEffect } from 'react';
import "../styles/form.css"; 

const TaskForm = ({ onAddTask, taskToEdit, onUpdateTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('Pending');


  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setPriority(taskToEdit.priority);
      setDueDate(taskToEdit.dueDate);
      setStatus(taskToEdit.status);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim() || !dueDate) {
      alert('Please provide title, description, and due date.');
      return;
    }

    const taskData = {
      title,
      description,
      priority,
      dueDate,
      status,
    };

    if (taskToEdit) {
      onUpdateTask(taskToEdit._id, taskData);  // Pass the task ID for updating
    } else {
      onAddTask(taskData);  // If no task is being edited, create a new one
    }

    setTitle('');
    setDescription('');
    setPriority('Low');
    setDueDate('');
    setStatus('Pending');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>{taskToEdit ? 'Edit Task' : 'Add a New Task'}</h2>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          id="title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Enter task title" 
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description: </label>
        <textarea 
          id="description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Enter task description"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="priority">Priority : </label>
        <select 
          id="priority" 
          value={priority} 
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="dueDate">Due Date : </label>
        <input 
          type="date" 
          id="dueDate" 
          value={dueDate} 
          onChange={(e) => setDueDate(e.target.value)} 
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {taskToEdit ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
