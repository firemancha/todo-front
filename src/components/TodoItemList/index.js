import "./index.css";
import TodoItem from "../TodoItem/index";

const TodoItemList = () => {
  return (
    <div className="todo-item-list">
      <TodoItem isDone={true} content={"1일 1 commit"} />
      <TodoItem isDone={true} content={"1일 1 알고리즘 문제 풀기"} />
      <TodoItem
        isDone={true}
        content={"daily 프로젝트: todolist 만들기(front)"}
      />
      <TodoItem isDone={false} content={"OPIc 자기소개 준비"} />
      <TodoItem isDone={false} content={"DB 전체 내용 정리: ~ DBMS"} />
    </div>
  );
};

export default TodoItemList;
