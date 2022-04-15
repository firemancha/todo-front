import "./index.css";
import TodoForm from "../../components/TodoForm";
import TodoTitle from "../../components/TodoTitle/index";
import TodoItemList from "../../components/TodoItemList/index";

const TodoContainer = () => {
  return (
    <div className="todo-container">
      <TodoTitle />
      <TodoForm />
      <TodoItemList />
    </div>
  );
};

export default TodoContainer;
