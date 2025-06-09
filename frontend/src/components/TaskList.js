import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdate, onDelete }) => (
  <div>
    <h2 style={{ marginBottom: '20px' }}>Task List</h2>
    {tasks.length === 0 ? (
      <p style={{ textAlign: 'center', color: '#777' }}>No tasks available. Add a new task!</p>
    ) : (
      tasks.map(task => (
        <TaskItem key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
      ))
    )}
  </div>
);

export default TaskList;
