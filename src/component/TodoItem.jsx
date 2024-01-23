import React from "react";

const TodoItem = ({ todo, onDeleteTodoItem, onToggleTodoItem }) => {
  const { id, title, contents, isDone } = todo;

  return (
    <li>
      <article>
        <h3>{title}</h3>
        <p>{contents}</p>
        <div>
          <button onClick={() => onDeleteTodoItem(id)}>삭제</button>
          <button onClick={() => onToggleTodoItem(id)}>
            {isDone ? "취소" : "완료"}
          </button>
        </div>
      </article>
    </li>
  );
};

export default TodoItem;
