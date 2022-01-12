import React, { useState } from 'react';
import AddTaskForm from '../components/AddTaskForm';
import { createToDo } from '../services/crud';

export default function ToDos() {
  const [task, setTask] = useState('');
  const [message, setMessage] = useState('');
  //const [newTask, setNewTask] = useState('');

  async function handleSave(e) {
    try {
      e.preventDefault();
      await createToDo(task);
      setMessage('Task has been added');
      alert(message);
      window.location.reload();
    } catch {
      setMessage('Something went wrong');
    }
  }

  // const handleSave = async (e) => {
  //e.preventDefault();
  //const resp = await createToDo(newTask);
  //setMessage('Task has been added');
  //setNewTask('');
  //setTask((prev) => [...prev, resp[0]]);
  //};

  return (
    <div>
      <AddTaskForm
        message={message}
        handleSave={handleSave}
        setTask={setTask}
        task={task}
      ></AddTaskForm>
    </div>
  );
}
