import React from "react";
import UpdateComponent from "./HigherOrderCom";

function CounterTwo({ func, count }) {
  return (
    <div>
      }}
      <button
        onClick={func}
        style={{
          color: "white",
          padding: "100px",
          border: "none",
          background: "green",
          margin: "10px",
        }}
      >
        Add 2 <h3>{count}</h3>
      </button>
    </div>
  );
}

export default UpdateComponent(CounterTwo, 2);
