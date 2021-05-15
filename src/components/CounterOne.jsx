import React from "react";
import UpdateComponent from "./HigherOrderCom";
function CounterOne({ func, count }) {
  return (
    <div>
      <button
        onClick={func}
        style={{
          color: "white",
          padding: "100px",
          border: "none",
          background: "tomato",
          margin: "10px",
        }}
      >
        Add 1 <h3>{count}</h3>
      </button>
    </div>
  );
}

export default UpdateComponent(CounterOne, 1);
