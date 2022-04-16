import "./index.css";
import TodoItem from "../TodoItem/index";

const TodoItemList = (props) => {
  return (
    <div className="todo-item-list">
      {props.todos.map((item) => {
        return (
          <TodoItem key={item.id} isDone={item.isDone} content={item.content} />
        );
      })}
    </div>
  );
};

export default TodoItemList;
