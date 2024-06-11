// src/components/TaskList.js
import React from 'react';

export function TaskList({ tasks }) {
  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
              {task.task}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
