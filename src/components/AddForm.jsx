import { useState, useRef } from "react";
import "../App.scss";

/* Add Item 을 눌렀을 때, input 값에 존재하는 두 개의 value (tData, cData) 를 props로 ListCard에 보낸 후
input value를 초기화 */

/* 값을 넣어줄 가상의 공간 생성 */
function AddForm({ setTodoData, todoData }) {
  const [temp, setTemp] = useState({
    title: "",
    content: "",
  });
  const { title, content } = temp;
  const onChange = (event) => {
    const { name, value } = event.target;
    setTemp({
      ...temp,
      [name]: value,
    });
  };
  const todoId = useRef(3);

  const onCreate = function () {
    const { title, content } = temp;
    const list = {
      id: todoId.current,
      title: title,
      content: content,
      isDone: false,
    };
    console.log(list);
    setTemp({
      title: "",
      content: "",
    });
    if (title.trim() === "" || content.trim() === "") {
      alert("blank");
      return null;
    } else {
      return setTodoData([...todoData, list]), (todoId.current += 1);
    }
  };

  return (
    <div className="AddForm">
      <h2>title</h2>
      <input
        type="text"
        className="input w-full bg-white max-w-xs"
        name="title"
        value={title}
        placeholder="Type here"
        onChange={onChange}
      />
      <h2>content</h2>
      <input
        type="text"
        className="input w-full bg-white max-w-xs"
        name="content"
        value={content}
        placeholder="Type here"
        onChange={onChange}
      />
      <button type="button" className="btn glass" onClick={onCreate}>
        Add Item
      </button>
    </div>
  );
}

export default AddForm;
