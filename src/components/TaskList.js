import React from "react";

function TaskList({ tasks, updateTask, deleteTask }) {
  return (
    <div className="space-y-3">
      {tasks.map(task => (
        <div
          key={task.id}
          className="flex items-center justify-between bg-gray-50 border rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition"
        >
          <span
            className={
              "flex-1 " + (task.completed ? "line-through text-gray-400" : "text-gray-800")
            }
          >
            {task.title}
          </span>
          <button
            onClick={() => updateTask(task.id, { ...task, completed: !task.completed })}
            className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="ml-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
