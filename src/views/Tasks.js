import React, { useState, useEffect } from 'react';
import { getTasks } from '../services/crud';
import TaskList from '../components/TaskList';

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

  if (loading) return <h1>loading...</h1>;

  return (
    <div>
      <h1>These are your current tasks to do</h1>
      {tasks.map((task) => (
        <TaskList key={task.id} tasks={task} />
      ))}
    </div>
  );
}
