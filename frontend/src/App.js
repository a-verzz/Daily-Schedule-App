import React, { useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from './api';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCreate = async (task) => {
    await createTask(task);
    loadTasks();
  };

  const handleUpdate = async (id, task) => {
    await updateTask(id, task);
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div className="container">
      <h1>Daily Schedule App</h1>
      <TaskForm onSubmit={handleCreate} />
      <TaskList tasks={tasks} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}

export default App;
