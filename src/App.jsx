import { useState } from "react";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import Todo from "./components/Todo";
import "./App.scss";

function App() {
  const [todoData, setTodoData] = useState([
    {
      id: 1,
      title: "Studying React",
      content: "I`m gonna study base fo React",
      isDone: false,
    },
    {
      id: 2,
      title: "🎏",
      content: "🎟",
      isDone: true,
    },
  ]);
  console.log(todoData);
  /*  map으로 배열 뽑고 filter로 isDone에 따라서 가르고 */

  return (
    <div className="App">
      <Header />
      <AddForm todoData={todoData} setTodoData={setTodoData} />
      <Todo todoData={todoData} setTodoData={setTodoData} />
    </div>
  );
}

export default App;
