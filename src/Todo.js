import React from "react";
import trackEvent, { EVENT_TYPES } from "./utils/trackEvent";

const Todo = ({ todo, index, toggleTodo, deleteTodo }) => {
  const handleToggleTodo = () => {
    trackEvent(EVENT_TYPES.TOGGLE_TODO);
    toggleTodo(index);
  };
  const handleDeleteTodo = () => {
    trackEvent(EVENT_TYPES.DELETE_TODO);
    deleteTodo(index);
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={handleToggleTodo}
      />
      <p
        style={{
          textDecoration: todo.checked ? "line-through" : "none",
        }}
      >
        {todo.text}
      </p>
      <button onClick={handleDeleteTodo}>✖</button>
    </li>
  );
};

export default Todo;
