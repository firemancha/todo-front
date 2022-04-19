import "./index.css";
import { useState, useRef } from "react";
import TodoCheck from "../../elements/TodoCheck";
import TodoEdit from "./../../elements/TodoEdit";
import TodoDelete from "./../../elements/TodoDelete";
import TodoContent from "../../elements/TodoContent";
import TodoInput from "../../elements/TodoInput";

const TodoItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  const onCheck = () => {
    props.onCheck(props.id);
  };

  const onDelete = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <TodoInput value={props.content} ref={inputRef} />
      ) : (
        <TodoContent isDone={props.isDone} content={props.content} />
      )}
      <TodoCheck
        isEditing={isEditing}
        isDone={props.isDone}
        onCheck={onCheck}
      />
      <TodoEdit
        todoID={props.id}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        inputRef={inputRef}
        onEditInput={props.onEditInput}
      />
      <TodoDelete isEditing={isEditing} onDelete={onDelete} />
    </div>
  );
};

export default TodoItem;
