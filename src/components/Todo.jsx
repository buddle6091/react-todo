import "../App.scss";
import ListCard from "./ListCard";

function Todo({ todoData, setTodoData }) {
  /*  map으로 배열 뽑고 filter로 isDone에 따라서 가르고 */

  return (
    <div className="Todo">
      <p className="pstyle">Working.. 🔥</p>
      <div className="Todo list">
        {todoData.map((todo) => {
          if (todo.isDone == 0) {
            return (
              <ListCard
                todo={todo}
                key={todo.id}
                todoData={todoData}
                setTodoData={setTodoData}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <p className="pstyle">Done..! 🎉</p>
      <div className="Todo list">
        {todoData.map((todo) => {
          if (todo.isDone == 1) {
            return (
              <ListCard
                todo={todo}
                key={todo.id}
                todoData={todoData}
                setTodoData={setTodoData}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default Todo;
