import React, { useState, useEffect } from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="page">
      <h2>📝 My Tasks</h2>

      <AddTask setTasks={setTasks} />

      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
