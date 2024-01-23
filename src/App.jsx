import React, { useRef, useState } from "react";
import "./App.css";
import "./css/todo.css";

function App() {
  const [todos, setTodos] = useState([]);

  const id = useRef(0);
  const todoButton = () => {
    const add = {
      id: id.current,
      title,
      contents,
      isDone: false,
    };
    id.current += 1;
    setTodos([...todos, add]);
    setTitle("");
    setContents("");
  };

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentHandler = (e) => {
    setContents(e.target.value);
  };

  const completeButton = (index) => {
    console.log(todos);
    const completeTodo = todos[index]; //클릭된 state의 index값
    const doneState = todos.filter((value, i) => i !== index);
    completeTodo.isDone = true;
    setTodos([...doneState, completeTodo]);
  };

  const cancelButton = (index) => {
    const cancelTodo = todos[index];
    cancelTodo.isDone = false;
    const cancelState = todos.filter((value, i) => i !== index);
    setTodos([...cancelState, cancelTodo]);
  };

  const deleteButton = (index) => {
    console.log(todos);
    const updateTodo = todos.filter((todo) => todo.id !== index);
    setTodos(updateTodo);
  };

  return (
    <div className="body">
      <div className="header">
        <p>Todo-List</p>
        <p>React</p>
      </div>
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
      <div className="contentBox">
        <h4>Working..</h4>
        <div className="workingBox">
          {todos
            .filter((item) => item.isDone === false)
            .map((item, index) => {
              return (
                <div className="todoItem" key={index}>
                  <p>{item.title}</p>
                  <p>{item.contents}</p>
                  <button
                    onClick={() => deleteButton(item.id)}
                    className="deleteBtn"
                  >
                    삭제하기
                  </button>
                  <button
                    onClick={() => completeButton(index)}
                    className="completeBtn"
                  >
                    완료
                  </button>
                </div>
              );
            })}
        </div>
        <h4>Done...!</h4>
        <div className="doneBox">
          {todos
            .filter((item) => item.isDone === true)
            .map((item, index) => {
              return (
                <div className="todoItem" key={index}>
                  <p>{item.title}</p>
                  <p>{item.contents}</p>
                  <button
                    onClick={() => deleteButton(item.id)}
                    className="deleteBtn"
                  >
                    삭제하기
                  </button>
                  <button onClick={() => cancelButton(index)}>취소</button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
