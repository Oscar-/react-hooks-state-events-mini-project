

// Update the `Task` component so that it shows the task's text and category.

// _When the delete button is clicked_, the task should be removed from the list.

import React from "react";

function Task({ task, onDelete }) {
  const { text, category } = task;

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDelete}>
        X
      </button>
    </div>
  );
}

export default Task;