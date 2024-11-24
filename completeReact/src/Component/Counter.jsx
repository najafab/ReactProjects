import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [obj, setObj] = useState({
    name: "najaf",
    age: 23,
    Qualification: "Bachelor in computer engineering",
  });

  const Increase = () => {
    setCounter(counter + 1);
    console.log("Counter = ", counter);
  };
  const Decrease = () => {
    setCounter(counter - 1);
    console.log("Counter = ", counter);
  };
  return (
    <div>
      <h1>{obj.name}</h1>
      <h1>{obj.Qualification}</h1>

      <h1>{counter}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
    </div>
  );
};

export default Counter;
