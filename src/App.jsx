import { useState } from "react";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import ListCard from "./components/ListCard";
import "./App.scss";

function App({ todos }) {
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

  /*  map으로 배열 뽑고 filter로 isDone에 따라서 가르고 */

  return (
    <div className="App">
      <Header />
      <AddForm setTodoData={setTodoData} />
      <p className="pstyle">Working.. 🔥🎉</p>
      <ListCard todoData={todoData} key={todoData.id} />
      <p className="pstyle">Done..! 🎉</p>
      <ListCard />
    </div>
  );
}

export default App;
