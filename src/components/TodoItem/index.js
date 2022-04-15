import "./index.css";
import TodoCheck from "../../elements/TodoCheck";
import TodoEdit from "./../../elements/TodoEdit";
import TodoDelete from "./../../elements/TodoDelete";
import TodoContent from "../../elements/TodoContent";

const TodoItem = (props) => {
  return (
    <div className="todo-item">
      <TodoContent isDone={props.isDone} content={props.content} />
      <TodoCheck isDone={props.isDone} />
      <TodoEdit />
      <TodoDelete />
    </div>
  );
};

export default TodoItem;
