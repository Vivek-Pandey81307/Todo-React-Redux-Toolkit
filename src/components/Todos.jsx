import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

function Todos() {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          
            <Todo key={todo.id} text={todo.text} id={todo.id} />
          
        ))}
      </ul>
    </>
  );
}

export default Todos;
