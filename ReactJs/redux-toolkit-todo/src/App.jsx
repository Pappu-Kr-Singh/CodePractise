import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-gray-400 font-bold text-4xl">Todo App Using Redux</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
