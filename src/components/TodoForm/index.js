import TodoInput from "../../elements/TodoInput";
import ConfirmButton from "../../elements/ConfirmButton/index";
import "./index.css";

const TodoForm = () => {
  return (
    <div className="todo-form">
      <TodoInput />
      <ConfirmButton />
    </div>
  );
};

export default TodoForm;
