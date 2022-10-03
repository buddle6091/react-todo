import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import ListCard from "./components/ListCard";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AddForm></AddForm>
      <p className="pstyle">Working.. 🔥🎉</p>
      <ListCard></ListCard>
      <p className="pstyle">Done..! 🎉</p>
      <ListCard></ListCard>
    </div>
  );
}

export default App;
