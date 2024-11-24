import React from "react";

const Events = () => {
  const age = 22;
  const handleClick = () => {
    const msg = age > 20 ? "najaf is ready" : "najaf is not ready";
    alert(msg);
  };
  const add = (a) => {
    alert(a + 20);
  };
  return (
    <div>
      <h1>We are learning events</h1>
      <button onMouseOver={handleClick}>Click</button>
      <button onClick={() => add(10)}>Click</button>
    </div>
  );
};

export default Events;
