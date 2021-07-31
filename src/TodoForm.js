import React, { useState } from "react";
import trackEvent, { EVENT_TYPES } from "./utils/trackEvent";

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue !== "") {
      trackEvent(EVENT_TYPES.ADD_TODO);
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
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
