import { useState } from "react";
import "../App.scss";

function ListCard() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white">Cookies!</h2>
          <p className="text-white">We are using cookies for no reason.</p>
          <div className="card-actions justify-end">
            <button className="btn bg-red-600">Delete</button>
            <button className="btn bg-green-400 text-white">Done!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCard;
