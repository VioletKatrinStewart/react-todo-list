import React, { useState, useEffect } from 'react';
import { getTasks } from '../services/crud';
import TaskList from '../components/TaskList';
import { toggleCompleted } from '../services/crud';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await getTasks();
      setTasks(data);
      setLoading(false);
    };
    getData();
  }, []);

  const handleClick = async (task) => {
    await toggleCompleted(task.id, !task.is_complete);
    setTasks((prevState) =>
      prevState.map((todo) =>
        todo.id === task.id ? { ...task, is_complete: !task.is_complete } : todo
      )
    );
  };

  if (loading) return <h1>loading...</h1>;

  return (
    <div>
      <h1>These are your current tasks to do</h1>
      {tasks.map((task) => (
        <TaskList key={task.id} tasks={task} handleClick={handleClick} />
      ))}
    </div>
  );
}
