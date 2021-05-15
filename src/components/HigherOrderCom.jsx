import React, { useState } from "react";

const UpdateComponent = (CounterComponent, addCount) => {
  function HigherOrderCom() {
    const [count, setCount] = useState(0);
    const countFunc = (e) => {
      setCount((e) => e + addCount);
    };
    return (
      <div>
        <CounterComponent count={count} func={countFunc}></CounterComponent>
      </div>
    );
  }
  return HigherOrderCom;
};

export default UpdateComponent;
