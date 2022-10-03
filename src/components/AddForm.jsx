import { useState } from "react";
import "../App.scss";

/* Add Item 을 눌렀을 때, input 값에 존재하는 두 개의 value (tData, cData) 를 props로 ListCard에 보낸 후
input value를 초기화 */

function AddForm() {
  const [tData, setTData] = useState("");
  const [cData, setCData] = useState("");

  return (
    <div className="AddForm">
      <h2>title</h2>
      <input
        type="text"
        placeholder="Type here"
        className="input w-full max-w-xs"
      />
      <h2>content</h2>
      <input
        type="text"
        placeholder="Type here"
        className="input w-full max-w-xs"
      />
      <button className="btn glass">Add Item</button>
    </div>
  );
}

export default AddForm;
