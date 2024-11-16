import React, { useState } from "react";

const Day3 = () => {
  const [showData, setShowData] = useState(false);
  const handleShowData = () => {
    setShowData((prev) => !prev);
  };
  return (
    <div>
      <button
        className="btn btn-primary mt-3 fs-3 mb-2 w-25"
        onClick={handleShowData}
      >
        {showData ? "Hide" : "Show"}
      </button>
      {showData && (
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. A tempore illum natus
          beatae nulla dignissimos dolores voluptatibus nesciunt quae inventore
          ut repellat ea suscipit repudiandae culpa eius, aliquid maiores Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Inventore, sunt.
          Soluta, id.
        </h3>
      )}
    </div>
  );
};

export default Day3;
