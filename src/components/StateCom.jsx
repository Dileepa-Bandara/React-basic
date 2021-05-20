import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "../scss/state.scss";

function StateCom() {
  const [count, setCount] = useState(0);

  const addFunction = () => {
    setCount((e) => e + 1);
  };
  const subtractFunction = () => {
    setCount((e) => e - 1);
  };

  return (
    <div className="simple__counter">
      <div className="counter__container">
        <h1>{count}</h1>
        <Button variant="contained" color="secondary" onClick={addFunction}>
          Add 1
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={subtractFunction}
        >
          Subtract 1
        </Button>
      </div>
    </div>
  );
}

export default StateCom;
