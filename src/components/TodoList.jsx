import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ todos, headTitle, onDeleteClick, onToggleClick }) => {
  return (
    <article>
      <h3>{headTitle}</h3>
      <ul className="cardBox">
        {todos.map((item) => {
          return (
            <TodoCard
              key={item.id}
              todos={item}
              onDeleteClick={onDeleteClick}
              onToggleClick={onToggleClick}
            />
          );
        })}
      </ul>
    </article>
  );
};

export default TodoList;
