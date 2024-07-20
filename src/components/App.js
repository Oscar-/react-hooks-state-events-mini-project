import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter(task => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categoryList={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectedCategory={handleCategorySelect}
      />
      <NewTaskForm 
        categoryList={CATEGORIES.filter(category => category !== "All")} 
        onTaskFormSubmit={handleAddTask} 
      />
      <TaskList 
        tasks={tasks} 
        selectedCategory={selectedCategory} 
        onDeleteTask={handleDeleteTask} 
      />
    </div>
  );
}

export default App;