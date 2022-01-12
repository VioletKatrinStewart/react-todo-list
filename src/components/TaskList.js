import React from 'react';

export default function TaskList({ tasks, handleClick }) {
  return (
    <div>
      <p>{tasks.task}</p>
      <input
        type="checkbox"
        checked={tasks.is_complete}
        onChange={() => handleClick(tasks)}
      ></input>
    </div>
  );
}
