import { useState } from "react";
import "./index.css";

const TodoInput = () => {
  const [todo, setTodo] = useState("");

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <input
      className="todo-input"
      type="text"
      placeholder="추가할 할 일을 적어주세요."
      value={todo}
      onChange={onChange}
      autoFocus
    />
  );
};

export default TodoInput;
