import React from "react";

const Props2 = () => {
  const age = 20;
  const card = false;
  return (
    <div>
      <p>
        {age > 20
          ? "Eligible for driving license"
          : "Not eligible for driving licence"}
      </p>
      <h1>{card && "Najaf abbas jafree"}</h1>
    </div>
  );
};

export default Props2;
