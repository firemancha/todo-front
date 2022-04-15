import "./index.css";

const TodoItem = (props) => {
  return (
    <div className="todo-item">
      <div className="todo-item-content">todo 컨텐츠</div>
      <div className="todo-item-check">todo 체크</div>
      <div className="todo-item-update">todo 수정</div>
      <div className="todo-item-delete">todo 삭제</div>
    </div>
  );
};

export default TodoItem;
