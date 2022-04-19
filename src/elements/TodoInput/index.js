import { forwardRef, useState, useEffect } from "react";
import "./index.css";

const TmpInput = ({ value = "" }, ref) => {
  const [todo, setTodo] = useState("");

  useEffect(() => {
    setTodo(value);
  }, []);

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <input
      className="todo-input"
      ref={ref}
      type="text"
      placeholder="추가할 할 일을 적어주세요."
      value={todo}
      onChange={onChange}
      autoFocus
    />
  );
};

const TodoInput = forwardRef(TmpInput);
export default TodoInput;
