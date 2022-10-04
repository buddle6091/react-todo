import "../App.scss";

/* AddForm에서 보낸 tData, cData 를 각 값에 적용 -> useState Hook을 활용하여 기초 값에
 각각의 default 문자열을 박기*/

/* ListCard에 idDone 이라는 Boolean 값을 부여, 그 후 True 면 하단, False 면 상단
 물론 처음에 AddForm에서 오는 거는 다 상단에 있어야 하기에, default 는 False
  AddForm에서 추가한 순서대로 id 값을 발행, 완료든 취소든 id 순으로 오름차순 정렬
  삭제는 인덱스 delete*/

function ListCard({ todo, todoData, setTodoData }) {
  const { title, content, id } = todo;

  const drop = () => {
    const newArray = todoData.filter((x) => x.id !== id);
    setTodoData(newArray);
  };

  const done = () => {
    const newArray2 = todoData.map((x) => {
      if (x.id === id) {
        return setTodoData();
      }
    });
    setTodoData(newArray2);
  };

  return (
    <div>
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white" name="title">
            {title}
          </h2>
          <p className="text-white" name="content">
            {content}
          </p>
          <div className="card-actions justify-end">
            <button className="btn bg-red-600" onClick={drop}>
              Delete
            </button>
            <button className="btn bg-green-400 text-white" onClick={done}>
              {todo.isDone ? "Cancle" : "Done"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCard;
