import React from "react";

const Todo = ({ todo, index, toggleTodo, deleteTodo }) => {
  const handleToggleTodo = () => {
    toggleTodo(index);
  };
  const handleDeleteTodo = () => {
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
