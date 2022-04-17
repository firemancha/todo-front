import TodoInput from "../../elements/TodoInput";
import ConfirmButton from "../../elements/ConfirmButton/index";
import "./index.css";
import { useRef } from "react";

const TodoForm = (props) => {
  const inputRef = useRef(null);
  return (
    <div className="todo-form">
      <TodoInput ref={inputRef} />
      <ConfirmButton inputRef={inputRef} onSubmit={props.onSubmit} />
    </div>
  );
};

export default TodoForm;
