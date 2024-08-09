import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Slices/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const AddTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <form
        onSubmit={AddTodoHandler}
        className="flex items-center justify-center gap-3 mt-10"
      >
        <input
          name="price"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your Todo"
          className="block w-1/2 rounded-md border-0 py-1.5 pl-7 pr-20 text-xl text-gray-100 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 placeholder:text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
        />
        <button
          type="submit"
          className="bg-red-100 p-2 font-bold text-gray-800"
        >
          Add Todo
        </button>
      </form>
    </>
  );
};

export default AddTodo;
