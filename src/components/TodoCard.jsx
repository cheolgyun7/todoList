import React from "react";

const TodoCard = ({ todos, onDeleteClick, onToggleClick }) => {
  return (
    <li className="todoCard">
      <article>
        <h3>{todos.title}</h3>
        <p>{todos.contents}</p>
      </article>
      <div>
        <button className="cancelBtn" onClick={() => onDeleteClick(todos.id)}>
          삭제
        </button>
        <button className="toggleBtn" onClick={() => onToggleClick(todos.id)}>
          {todos.isDone ? "취소" : "완료"}
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
