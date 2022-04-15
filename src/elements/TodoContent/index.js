import "./index.css";

const TodoContent = ({ isDone, content }) => {
  return (
    <div
      className="todo-item-content"
      style={{
        color: isDone ? "gray" : "black",
        textDecoration: isDone ? "line-through" : null,
      }}
    >
      {content}
    </div>
  );
};

export default TodoContent;
