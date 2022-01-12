import React, { useState } from 'react';
import AddTaskForm from '../components/AddTaskForm';
import { createToDo } from '../services/crud';

export default function ToDos() {
  const [task, setTask] = useState('');
  const [message, setMessage] = useState('');

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
