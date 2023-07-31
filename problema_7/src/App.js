import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskDataGrid from './components/TaskDataGrid'; 

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [sortDirection, setSortDirection] = useState('asc'); 

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const sortByDate = (direction) => {
    setSortDirection(direction);
  };

  return (
    <div>
    <TaskForm addTask={addTask} />
    <TaskDataGrid 
      tasks={tasks}
      onDelete={deleteTask}
      sortByDate={sortByDate}
      sortDirection={sortDirection}
    />
  </div>
  );
};

export default App;