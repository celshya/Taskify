import axios from 'axios';

const API_URL = 'https://taskify-nh5z.onrender.com/tasks';

export const getTasks = async (query = '') => {
    try {
      const response = await axios.get(`${API_URL}?${query}`);
      return response;
    } catch (error) {
      console.error('Error fetching tasks', error);
      throw error;
    }
  };
export const createTask = async (task) => axios.post(API_URL, task);
export const updateTask = async (id, updatedTask) => axios.put(`${API_URL}/${id}`, updatedTask);
export const deleteTask = async (id) => axios.delete(`${API_URL}/${id}`);
