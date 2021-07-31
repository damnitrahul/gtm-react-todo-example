import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue !== "") {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="Add todo..."
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
