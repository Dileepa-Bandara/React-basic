import React from "react";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";

function CounterMain() {
  return (
    <div
      style={{
        display: "flex",
        background: "black",
        width: "100%",
        justifyContent: "center",
        height: "600px",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <CounterOne></CounterOne>
      <CounterTwo></CounterTwo>
    </div>
  );
}

export default CounterMain;
