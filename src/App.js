import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const App = () => {
  const todoList = [
    {
      text: "start learning GTM",
      checked: false,
    },
    {
      text: "keep learning React",
      checked: false,
    },
    {
      text: "start doing a new React project",
      checked: false,
    },
    {
      text: "go for lunch",
      checked: false,
    },
  ];
  const [todos, setTodos] = useState(todoList);

  const toggleTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].checked = !newTodo[index].checked;
    setTodos(newTodo);
  };

  const deleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  const addTodo = (text) => {
    const updatedTodo = {
      text: text,
      checked: false,
    };
    const newTodo = [...todos, updatedTodo];
    setTodos(newTodo);
  };

  return (
    <div className="App">
      <h1>Todo List - GTM </h1>
      <TodoForm addTodo={addTodo} checked={todos.checked} />
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            todo={todo}
            key={index}
            index={index}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
