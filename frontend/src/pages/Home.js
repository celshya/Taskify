import React, { useState, useEffect } from 'react';
import { getTasks, createTask, deleteTask, updateTask } from '../services/api';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Fetch tasks on component load
  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetch all tasks from API
  const fetchTasks = async () => {
    try {
      const { data } = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  // Create a new task and refresh the task list
  const handleCreateTask = async (task) => {
    try {
      await createTask(task);
      fetchTasks();
    } catch (error) {
      console.error('Failed to create task:', error);
    }
  };

  // Update an existing task
  const handleUpdateTask = async (id, task) => {
    try {
      await updateTask(id, task);  // API call to update the task
      fetchTasks();
      setTaskToEdit(null);  // Clear the task to edit after update
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  // Delete a task and refresh the task list
  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  // Set task to edit
  const handleEditTask = (task) => {
    setTaskToEdit(task);
  };

  return (
    <div className='app-container'>
      <h1>Taskify</h1>
      <TaskForm 
        onAddTask={handleCreateTask} 
        taskToEdit={taskToEdit} 
        onUpdateTask={handleUpdateTask}
      />
      <TaskList 
        tasks={tasks} 
        onDeleteTask={handleDeleteTask} 
        onEditTask={handleEditTask}  // Pass edit handler to TaskList
      />
    </div>
  );
}

export default Home;
