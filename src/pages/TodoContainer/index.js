import "./index.css";
import { useState, useEffect, useRef } from "react";
import TodoForm from "../../components/TodoForm";
import TodoTitle from "../../components/TodoTitle/index";
import TodoItemList from "../../components/TodoItemList/index";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const idx = useRef(0);

  useEffect(() => {
    const todo = [
      {
        id: idx.current + 1,
        content: "1일 1 commit",
        isDone: true,
      },
      {
        id: idx.current + 2,
        content: "1일 1 알고리즘 문제 풀기",
        isDone: true,
      },
      {
        id: idx.current + 3,
        content: "daily 프로젝트",
        isDone: false,
      },
    ];

    setTodos(todo);
    idx.current = 4;
  }, []);

  const onSubmit = (text) => {
    const todo = {
      id: idx.current,
      content: text,
      isDone: false,
    };
    setTodos(todos.concat(todo));
    idx.current += 1;
  };

  const onEditInput = (id, text) => {
    const todo = {
      id: id,
      content: text,
      isDone: false,
    };

    setTodos(
      todos.map((item) => {
        return item.id === todo.id ? todo : item;
      })
    );
  };

  const onCheck = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  const onDelete = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  return (
    <div className="todo-container">
      <TodoTitle />
      <TodoForm onSubmit={onSubmit} />
      <TodoItemList
        todos={todos}
        setTodos={setTodos}
        onCheck={onCheck}
        onDelete={onDelete}
        onEditInput={onEditInput}
      />
    </div>
  );
};

export default TodoContainer;
