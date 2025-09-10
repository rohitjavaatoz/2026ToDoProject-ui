import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    axios.get("http://localhost:8080/api/tasks")
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = (task) => {
    axios.post("http://localhost:8080/api/tasks", task)
      .then(() => fetchTasks())
      .catch(err => console.error(err));
  };

  const updateTask = (id, updatedTask) => {
    axios.put(`http://localhost:8080/api/tasks/${id}`, updatedTask)
      .then(() => fetchTasks())
      .catch(err => console.error(err));
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:8080/api/tasks/${id}`)
      .then(() => fetchTasks())
      .catch(err => console.error(err));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          🚀 My Futuristic To-Do List
        </h1>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
