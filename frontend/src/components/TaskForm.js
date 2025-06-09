import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    repeatDaily: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = { ...formData, date: formData.date || null };
    onSubmit(taskData);
    setFormData({ title: '', description: '', date: '', repeatDaily: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Task</h2>

      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter task title"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter task description"
          rows="4"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      <div className="form-group checkbox-group">
        <label htmlFor="repeatDaily">Repeat Daily:</label>
        <input
          id="repeatDaily"
          name="repeatDaily"
          type="checkbox"
          checked={formData.repeatDaily}
          onChange={handleChange}
          disabled={!!formData.date}
          title={formData.date ? 'Cannot repeat daily when a specific date is selected.' : ''}
        />
      </div>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
