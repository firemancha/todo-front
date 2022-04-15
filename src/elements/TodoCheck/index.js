import "./index.css";
import { useState } from "react";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";

const TodoCheck = ({ isDone }) => {
  return (
    <div className="todo-item-check">
      {isDone ? (
        <AiFillCheckCircle size="36" color="black" />
      ) : (
        <AiOutlineCheckCircle size="36" color="black" />
      )}
    </div>
  );
};

export default TodoCheck;
