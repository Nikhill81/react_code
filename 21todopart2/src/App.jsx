import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import TodoItem2 from "./components/TodoItem2";
import TodoItem from "./components/TodoItem";

import "./App.css"

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem todoDate="4/1" todoName="Buy Milk"/>
      <TodoItem />
      <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
