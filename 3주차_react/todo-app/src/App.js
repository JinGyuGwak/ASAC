import { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import Login from "./login";
const App = () => {
  const [todos, setTodos] = useState([
    //todos 는 배열 형태로 관리 됨
    {
      id: 1,
      text: "리액트의 기초",
      checked: false,
    },
    {
      id: 2,
      text: "컴포넌트 기초",
      checked: true,
    },
    {
      id: 3,
      text: "일정 관리 기초",
      checked: false,
    },
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );
  return (
    // <TodoTemplate>
    //   <TodoInsert onInsert={onInsert} />
    //   <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    // </TodoTemplate>
    <Login.js />
  );
};

export default App;
