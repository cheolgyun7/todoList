const TodoForm = ({ onSubmitTodo }) => {
  const todoOnsubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const contents = e.target.contents.value;

    if (!title || !contents) {
      if (!title && !contents) {
        alert("제목과 내용을 입력하세요");
      } else if (!title) {
        alert("제목을 입력하세요");
      } else {
        alert("내용을 입력하세요");
      }
      return;
    }

    onSubmitTodo({
      id: crypto.randomUUID(),
      title,
      contents,
      isDone: false,
    });

    e.target.reset();
  };

  return (
    <form className="form" onSubmit={todoOnsubmit}>
      <div>
        제목 :
        <input type="text" name="title" placeholder="제목을 입력하세요" />
        내용 :
        <input type="text" name="contents" placeholder="내용을 입력하세요" />
      </div>
      <button className="submitBtn" type="submit">
        저장
      </button>
    </form>
  );
};

export default TodoForm;
