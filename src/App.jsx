import React, { useState } from "react";
import { ToDoList } from "./ToDoList";

function App() {
  // Initialize state with hard-coded tasks
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  return (
    <div className="p-4 max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;
