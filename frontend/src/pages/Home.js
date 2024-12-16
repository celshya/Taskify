import React, { useState, useEffect } from 'react';
import { getTasks, createTask, deleteTask } from '../services/api';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');

  // Fetch tasks on component load and when filters change
  useEffect(() => {
    fetchTasks();
  }, [statusFilter, priorityFilter]);

  // Fetch tasks from API with filters applied
  const fetchTasks = async () => {
    try {
      const queryParams = new URLSearchParams();
      if (statusFilter) queryParams.append('status', statusFilter);
      if (priorityFilter) queryParams.append('priority', priorityFilter);

      const { data } = await getTasks(queryParams.toString());
      setTasks(data);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  // Handle task creation
  const handleCreateTask = async (task) => {
    try {
      await createTask(task);
      fetchTasks();
    } catch (error) {
      console.error('Failed to create task:', error);
    }
  };

  // Handle task deletion
  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  return (
    <div className='app-container'>
      <h1>Taskify</h1>
      <TaskForm onAddTask={handleCreateTask} />

      {/* Filters */}
      <div className="filters">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value="">All Priorities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default Home;
