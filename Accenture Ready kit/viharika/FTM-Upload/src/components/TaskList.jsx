import React from "react";

export default function TaskList({ tasks, setTasks }) {
  const toggleDone = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="task-list">
      {tasks.length === 0 && <p>No tasks yet 🚀</p>}

      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => toggleDone(task.id)}
          />

          <span className={task.done ? "done" : ""}>
            {task.text}
          </span>

          <button onClick={() => deleteTask(task.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}
