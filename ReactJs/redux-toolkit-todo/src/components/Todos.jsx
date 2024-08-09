import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Slices/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="">
        {todos.map((todo) => (
          <li className="todos bg-green-50" key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
        Todos
      </div>
    </>
  );
};

export default Todos;
