import React, { useState } from "react";

const TodoForm = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentHandler = (e) => {
    setContents(e.target.value);
  };

  const todoButton = () => {
    const add = {
      id: crypto.randomUUID(),
      title,
      contents,
      isDone: false,
    };
    setTodos([...todos, add]);
    setTitle("");
    setContents("");
  };

  return (
    <div className="addList">
      <div>
        <strong>제목</strong> :
        <input value={title} onChange={titleHandler} className="addInput" />
        <strong>내용</strong> :
        <input
          value={contents}
          onChange={contentHandler}
          className="addInput"
        />
      </div>
      <button onClick={todoButton}>추가하기</button>
    </div>
  );
};

export default TodoForm;
