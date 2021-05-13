import React, { useState } from "react";
import "../scss/state.scss";

function StateCom() {
  const [answer, setAnswer] = useState("");
  const [input, setInput] = useState([]);
  console.log(input);

  let string = input.toString();
  console.log(string);
  return (
    <div className="state_container">
      <div className="state">
        <h2>Calculator</h2>
        <div className="calc">
          <div className="display">
            <input type="text" value={string} />
          </div>
          <div className="row1">
            <button
              style={{ flex: 0.5 }}
              onClick={() => setInput([...input, 1])}
            >
              1
            </button>
            <button
              style={{ flex: 0.5 }}
              onClick={() => setInput([...input, 2])}
            >
              2
            </button>
            <button
              style={{ flex: 0.5 }}
              onClick={() => setInput([...input, 3])}
            >
              3
            </button>
            <button
              style={{ flex: 1 }}
              onClick={() => setInput([...input, "+"])}
            >
              +
            </button>
          </div>
          <div className="row1">
            <button style={{ flex: 0.5 }}>4</button>
            <button style={{ flex: 0.5 }}>5</button>
            <button style={{ flex: 0.5 }}>6</button>
            <button style={{ flex: 1 }}>--</button>
          </div>
          <div className="row1">
            <button style={{ flex: 0.5 }}>7</button>
            <button style={{ flex: 0.5 }}>8</button>
            <button style={{ flex: 0.5 }}>9</button>
            <button style={{ flex: 1 }}>*</button>
          </div>
          <div className="row1">
            <button style={{ flex: 0.5 }}>0</button>
            <button style={{ flex: 0.5 }}>/</button>
            <button style={{ flex: 0.5 }}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StateCom;
