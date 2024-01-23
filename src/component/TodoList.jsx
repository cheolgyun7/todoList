import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ headTitle, todos, onDeleteTodoItem, onToggleTodoItem }) => {
  //   const toggleButton = (id) => {
  //     setTodos((prevTodos) =>
  //       prevTodos.map((todoItem) => {
  //         if (todoItem.id === id) {
  //           return {
  //             ...todoItem,
  //             isDone: !todoItem.isDone,
  //           };
  //         }
  //         return todoItem;
  //       })
  //     );
  //   };

  //   const completeButton = (index) => {
  //     const completeTodo = todos[index]; //클릭된 state의 index값
  //     const doneState = todos.filter((value, i) => i !== index);
  //     completeTodo.isDone = true;
  //     setTodos([...doneState, completeTodo]);
  //   };

  //   const cancelButton = (index) => {
  //     const cancelTodo = todos[index];
  //     cancelTodo.isDone = false;
  //     const cancelState = todos.filter((value, i) => i !== index);
  //     setTodos([...cancelState, cancelTodo]);
  //   };

  //   const deleteButton = (id) => {
  //     const updateTodo = todos.filter((todo) => todo.id !== id);
  //     setTodos(updateTodo);
  //   };

  return (
    <section>
      <h2>{headTitle}</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodoItem={onDeleteTodoItem}
            onToggleTodoItem={onToggleTodoItem}
          />
        ))}
      </ul>
    </section>
    // <div className="contentBox">
    //   <h4>Working..</h4>
    //   <div className="workingBox">
    //     {todos
    //       .filter((item) => item.isDone === false)
    //       .map((item, index) => {
    //         return (
    //           <div className="todoItem" key={index}>
    //             <p>{item.title}</p>
    //             <p>{item.contents}</p>
    //             <button
    //               onClick={() => deleteButton(item.id)}
    //               className="deleteBtn"
    //             >
    //               삭제하기
    //             </button>
    //             <button
    //               onClick={() => toggleButton(item.id)}
    //               className="completeBtn"
    //             >
    //               완료
    //             </button>
    //           </div>
    //         );
    //       })}
    //   </div>
    //   <h4>Done...!</h4>
    //   <div className="doneBox">
    //     {todos
    //       .filter((item) => item.isDone === true)
    //       .map((item, index) => {
    //         return (
    //           <div className="todoItem" key={index}>
    //             <p>{item.title}</p>
    //             <p>{item.contents}</p>
    //             <button
    //               onClick={() => deleteButton(item.id)}
    //               className="deleteBtn"
    //             >
    //               삭제하기
    //             </button>
    //             <button onClick={() => toggleButton(item.id)}>취소</button>
    //           </div>
    //         );
    //       })}
    //   </div>
    // </div>
  );
};

export default TodoList;
