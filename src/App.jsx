import React, { useRef, useState } from "react";
import "./App.css";
import "./css/todo.css";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const id = useRef(0);

  const addTodo = (newTodo) => {
    const todo = {
      id: id.current,
      ...newTodo,
      isDone: false,
    };
    id.current += 1;
    setTodos([...todos, todo]);
  };

  const completeButton = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, isDone: true } : todo
      )
    );
  };

  const cancelButton = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, isDone: false } : todo
      )
    );
  };

  const deleteButton = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="body">
      <div className="header">
        <p>Todo-List</p>
        <p>React</p>
      </div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteButton}
        onToggleStatus={completeButton}
        isDone={false}
      />
      <TodoList
        todos={todos}
        onDelete={deleteButton}
        onToggleStatus={cancelButton}
        isDone={true}
      />
    </div>
  );
}

export default App;
