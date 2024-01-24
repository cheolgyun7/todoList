import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoController = () => {
  const [todos, setTodos] = useState([]);
  const onSubmitTodo = (nextTodo) => {
    setTodos((prevTodos) => [nextTodo, ...prevTodos]);
  };

  const onDeleteClick = (id) => {
    if (window.confirm("삭제????")) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };
  const onToggleClick = (id) => {
    const toggle = todos.find((todo) => todo.id === id);

    const confirmMessage = toggle.isDone
      ? "완료를 취소하겠습니까?"
      : "완료하시겟습니까?";

    if (window.confirm(confirmMessage)) {
      setTodos((prev) =>
        prev.map((todoItem) => {
          if (todoItem.id === id) {
            return {
              ...todoItem,
              isDone: !todoItem.isDone,
            };
          }
          return todoItem;
        })
      );
    }
  };

  const workingTodo = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);
  return (
    <div className="divBody">
      <TodoForm onSubmitTodo={onSubmitTodo} />
      <TodoList
        todos={workingTodo}
        headTitle="Working."
        onDeleteClick={onDeleteClick}
        onToggleClick={onToggleClick}
      />
      <TodoList
        todos={doneTodos}
        headTitle="Done...!"
        onDeleteClick={onDeleteClick}
        onToggleClick={onToggleClick}
      />
    </div>
  );
};

export default TodoController;
