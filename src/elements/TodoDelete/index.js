import "./index.css";
import { useState } from "react";
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";

const TodoDelete = ({ isEditing, onDelete }) => {
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
      {isEditing ? null : isHover ? (
        <AiFillDelete size="36" color="black" onClick={onDelete} />
      ) : (
        <AiOutlineDelete size="36" color="black" onClick={onDelete} />
      )}
    </div>
  );
};

export default TodoDelete;
