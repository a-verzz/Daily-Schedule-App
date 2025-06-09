import React, { useState } from 'react';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(task);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(task.id, formData);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="task-edit-form">
          <div className="form-group">
            <label htmlFor={`title-${task.id}`}>Title:</label>
            <input
              id={`title-${task.id}`}
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor={`description-${task.id}`}>Description:</label>
            <textarea
              id={`description-${task.id}`}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter task description"
              rows="4"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor={`date-${task.id}`}>Date:</label>
            <input
              id={`date-${task.id}`}
              name="date"
              type="date"
              value={formData.date || ''}
              onChange={handleChange}
            />
          </div>

          <div className="form-group checkbox-group">
            <label htmlFor={`repeatDaily-${task.id}`}>Repeat Daily:</label>
            <input
              id={`repeatDaily-${task.id}`}
              name="repeatDaily"
              type="checkbox"
              checked={formData.repeatDaily}
              onChange={handleChange}
              disabled={!!formData.date}
              title={formData.date ? 'Cannot repeat daily when a specific date is selected.' : ''}
            />
          </div>

          <button type="submit">Save</button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            style={{ backgroundColor: '#6c757d' }}
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Date: {task.date ? task.date : 'Repeats Daily'}</p>
          <div className="task-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
