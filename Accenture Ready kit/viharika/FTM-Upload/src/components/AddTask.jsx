import React, { useState } from "react";

export default function AddTask({ setTasks }) {
  const [text, setText] = useState("");

  const addTask = () => {
    if (!text.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        done: false,
      },
    ]);

    setText("");
  };

  return (
    <div className="add-task">
      <input
        placeholder="Enter new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addTask}>Add</button>
    </div>
  );
}
