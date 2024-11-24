import React from "react";

const ShowProduct = () => {
  const products = [
    { id: 1, name: "najaf", Gender: "male", Age: "23" },
    { id: 2, name: "abbas", Gender: "male", Age: "22" },
    { id: 3, name: "jafree", Gender: "male", Age: "24" },
    { id: 4, name: "zain", Gender: "male", Age: "25" },
  ];
  return (
    <div>
      {products.map((data) => (
        <div key={data.id}>
          <h1>{data.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default ShowProduct;
