// import React, { useState } from "react";

// const TodoEditor = () => {
//   const [state, setState] = useState([{ todoTitle: "", todoContent: "" }]);
//   const [todoTitle, setTodoTitle] = useState("");
//   const [todoContent, setTodoContent] = useState("");

//   const titleHandler = (e) => {
//     setTodoTitle(e.target.value);
//   };

//   const contentHandler = (e) => {
//     setTodoContent(e.target.value);
//   };
//   const addListButton = () => {};
//   return (
//     <div className="addList">
//       <div>
//         <strong>제목</strong> :
//         <input value={todoTitle} onChange={titleHandler} className="addInput" />
//         <strong>내용</strong> :
//         <input
//           value={todoContent}
//           onChange={contentHandler}
//           className="addInput"
//         />
//       </div>
//       <button onClick={addListButton}>추가하기</button>
//     </div>
//   );
// };

// export default TodoEditor;
