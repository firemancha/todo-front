import "./index.css";
import { useState } from "react";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";

const TodoCheck = () => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className="todo-item-check"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHover ? (
        <AiFillCheckCircle size="36" color="black" />
      ) : (
        <AiOutlineCheckCircle size="36" color="black" />
      )}
    </div>
  );
};

export default TodoCheck;
