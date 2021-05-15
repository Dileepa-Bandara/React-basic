import React, { useState, useEffect } from "react";
import "../scss/state.scss";

function StateCom() {
  const [input, setInput] = useState({
    display: "",
    previousNumber: "",
    currentNumber: "",
    answer: "",
    operator: "",
  });

  const clickFunction = (value) => {
    setInput({ ...input, display: input.display + value });
  };

  const addFunction = (add) => {
    if (input.answer) {
      setInput({
        ...input,
        answer: "",

        previousNumber: input.answer,
        operator: add,
        currentNumber: input.display,
      });
      console.log(input.display);
    } else {
      setInput({
        ...input,
        previousNumber: input.display,
        display: "",
        operator: add,
      });
    }
  };

  const evaluateFunction = () => {
    if (input.operator === "+") {
      setInput({
        ...input,

        currentNumber: input.display,
        display: "",
      });
    }
  };

  useEffect(() => {
    setInput({
      ...input,
      answer: parseInt(input.previousNumber) + parseInt(input.currentNumber),
    });
  }, [input.currentNumber]);
  return (
    <div className="state_container">
      <div className="state">
        <h2>Calculator</h2>
        <div className="calc">
          <div className="display">
            <input
              type="text"
              readOnly
              value={input.answer ? input.answer : input.display}
            />
          </div>
          <div className="row1">
            <button style={{ flex: 0.5 }} onClick={() => clickFunction(1)}>
              1
            </button>
            <button style={{ flex: 0.5 }} onClick={() => clickFunction(2)}>
              2
            </button>
            <button style={{ flex: 0.5 }} onClick={() => clickFunction(3)}>
              3
            </button>
            <button style={{ flex: 1 }} onClick={() => addFunction("+")}>
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
            <button style={{ flex: 0.5 }} onClick={() => evaluateFunction()}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StateCom;
