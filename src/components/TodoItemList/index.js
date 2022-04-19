import "./index.css";
import TodoItem from "../TodoItem/index";

const TodoItemList = (props) => {
  return (
    <div className="todo-item-list">
      {props.todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            id={item.id}
            isDone={item.isDone}
            content={item.content}
            onCheck={props.onCheck}
            onDelete={props.onDelete}
            onEditInput={props.onEditInput}
            todos={props.todos}
            setTodos={props.setTodos}
          />
        );
      })}
    </div>
  );
};

export default TodoItemList;
