// TodoList.js
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onComplete, onCancel, isDone }) => {
  return (
    <div className={isDone ? "doneBox" : "workingBox"}>
      <h4>{isDone ? "Done...!" : "Working.."}</h4>
      {todos
        .filter((item) => item.isDone === isDone)
        .map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            onDelete={() => onDelete(item.id)}
            onComplete={() => onComplete(index)}
            onCancel={() => onCancel(index)}
          />
        ))}
    </div>
  );
};

export default TodoList;
