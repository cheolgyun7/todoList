import React from "react";
const TodoItem = ({ item, onDelete, onToggleStatus }) => {
  return (
    <div className="todoItem">
      <p>{item.title}</p>
      <p>{item.contents}</p>
      <button onClick={onDelete} className="deleteBtn">
        삭제하기
      </button>
      <button onClick={onToggleStatus}>{item.isDone ? "취소" : "완료"}</button>
    </div>
  );
};
export default TodoItem;
