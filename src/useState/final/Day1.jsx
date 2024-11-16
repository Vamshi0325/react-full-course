import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Day1 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev1) => prev1 + 1);
  };
  const decrement = () => {
    setCount(count % 3.5);
  };

  return (
    <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
      <button className="btn btn-danger rounded-3" onClick={decrement}>
        Decrement
      </button>
      <h1 className="m-0">{count}</h1>
      <button className="btn btn-primary rounded-3" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Day1;
