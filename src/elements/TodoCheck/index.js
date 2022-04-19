import "./index.css";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";

const TodoCheck = ({ isEditing, isDone, onCheck }) => {
  return (
    <div className="todo-item-check">
      {isEditing ? null : isDone ? (
        <AiFillCheckCircle size="36" color="black" onClick={onCheck} />
      ) : (
        <AiOutlineCheckCircle size="36" color="black" onClick={onCheck} />
      )}
    </div>
  );
};

export default TodoCheck;
