import React from "react";

function ToDoList({ tasks }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task, index) => (
        <li key={index} className="p-3 bg-gray-100 rounded-lg shadow-sm">
          {task}
        </li>
      ))}
    </ul>
  );
}

export { ToDoList };
