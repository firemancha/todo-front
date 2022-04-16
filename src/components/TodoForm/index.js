import TodoInput from "../../elements/TodoInput";
import ConfirmButton from "../../elements/ConfirmButton/index";
import "./index.css";

const TodoForm = (props) => {
  return (
    <div className="todo-form">
      <TodoInput />
      <ConfirmButton onSubmit={props.onSubmit} />
    </div>
  );
};

export default TodoForm;
