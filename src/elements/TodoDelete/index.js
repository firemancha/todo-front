import "./index.css";
import { useState } from "react";
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";

const TodoDelete = () => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className="todo-item-delete"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHover ? (
        <AiFillDelete size="36" color="black" />
      ) : (
        <AiOutlineDelete size="36" color="black" />
      )}
    </div>
  );
};

export default TodoDelete;
