import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import { useEffect } from "react";
import AddTask from "./AddTask";

const initialData = {
  todo: [],
  doing: [],
  done: [],
};

export default function TaskBoard({tasks,setTasks}) {
  

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
    };

    setTasks({
      ...tasks,
      todo: [...tasks.todo, newTask],
    });
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    const sourceList = [...tasks[source.droppableId]];
    const destList = [...tasks[destination.droppableId]];

    const [moved] = sourceList.splice(source.index, 1);
    destList.splice(destination.index, 0, moved);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceList,
      [destination.droppableId]: destList,
    });
  };

  return (
    <div className="board">
      <h3>Kanban Board</h3>

      <AddTask addTask={addTask} />

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="columns">
          {Object.keys(tasks).map((col) => (
            <Droppable droppableId={col} key={col}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="column"
                >
                  <h4>{col.toUpperCase()}</h4>

                  {tasks[col].map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="task-card"
                        >
                          {task.title}
                        </div>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
