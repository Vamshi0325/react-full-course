import React, { useState } from "react";

const Day2 = () => {
  const [data, setData] = useState([
    { id: 1, firstName: "Rahul", lastName: "Dravid", age: 25 },
    { id: 2, firstName: "Harry", lastName: "Potter", age: 26 },
    { id: 3, firstName: "Sachin", lastName: "Tendulkar", age: 27 },
  ]);

  const handleDelete = (id) => {
    console.log(id);
    const filterData = data.filter((item) => item.id !== id);
    console.log(filterData);
    setData(filterData);
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <div>
              <h3>{item.firstName}</h3>
              <h3>{item.lastName}</h3>
              <h3>{item.age}</h3>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Day2;
