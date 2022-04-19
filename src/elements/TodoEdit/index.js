import "./index.css";
import { useState } from "react";
import { AiFillEdit, AiOutlineEdit } from "react-icons/ai";
import ConfirmButton from "../ConfirmButton";

const TodoEdit = ({
  todoID,
  isEditing,
  setIsEditing,
  onEditInput,
  inputRef,
}) => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  const onEdit = () => {
    setIsEditing(true);
  };

  return (
    <div
      className="todo-item-edit"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isEditing ? (
        <ConfirmButton
          todoID={todoID}
          inputRef={inputRef}
          onEditInput={onEditInput}
          setIsEditing={setIsEditing}
        />
      ) : isHover ? (
        <AiFillEdit size="36" color="black" onClick={onEdit} />
      ) : (
        <AiOutlineEdit size="36" color="black" onClick={onEdit} />
      )}
    </div>
  );
};

export default TodoEdit;
