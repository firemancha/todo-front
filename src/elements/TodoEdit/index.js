import "./index.css";
import { useState } from "react";
import { AiFillEdit, AiOutlineEdit } from "react-icons/ai";

const TodoEdit = () => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className="todo-item-edit"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHover ? (
        <AiFillEdit size="36" color="black" />
      ) : (
        <AiOutlineEdit size="36" color="black" />
      )}
    </div>
  );
};

export default TodoEdit;
