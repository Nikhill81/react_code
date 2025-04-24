import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import TodoItem2 from "./components/TodoItem2";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <TodoItem />
      <TodoItem2 />
    </center>
  );
}

export default App;
