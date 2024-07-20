
// Pass the list of categories to this component from `App`. Then, update this
// component to display `<option>` elements for each category inside of the
// `<select>` element **except** the "All" category, so that the user can select a
// category when adding a new task.

// Next, update this form to be a _controlled component_, so that all form inputs
// are captured in state.

// _When the form is submitted_, add a new task to the list with the text and
// category from the form. For the tests for this feature to pass, you'll need a
// callback prop named `onTaskFormSubmit` that takes a task object as an argument.



import React, { useState } from "react";

function NewTaskForm({ categoryList, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && category) {
      onTaskFormSubmit({ text, category });
      setText("");
      setCategory("");
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select 
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>Select category</option>
          {categoryList.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;