import React from 'react';

export default function TaskList({ tasks }) {
  return (
    <div>
      <p>{tasks.task}</p>
      <input type="checkbox"></input>
    </div>
  );
}
