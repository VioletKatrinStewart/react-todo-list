export default function AddTaskForm({ message, task, setTask, handleSave }) {
  return (
    <div className="add">
      <h2> Add Tasks to your To-Do list here! </h2>
      <p> {message} </p>
      <form>
        <label>
          Task
          <input
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            type="text"
            placeholder="Task"
          />
        </label>
        <button onClick={handleSave}>Submit</button>
      </form>
    </div>
  );
}
