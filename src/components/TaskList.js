// First, we'll want to display all the tasks in our app. Pass down the task data
// from `App` to `TaskList`, and display each task using the `Task` component. Make
// sure to use a `key` prop!

import React from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory, onDeleteTask }) {

  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="tasks">
      {filteredTasks.map((task, index) => (
        <Task 
          task={task} 
          key={index} 
          onDelete={() => onDeleteTask(task)} 
        />
      ))}
    </div>
  );
}

export default TaskList;