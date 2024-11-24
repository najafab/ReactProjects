import React from "react";

const FilterProduct = () => {
  const products = [
    { id: 1, name: "najaf", Gender: "male", Age: "23" },
    { id: 2, name: "abbas", Gender: "female", Age: "22" },
    { id: 3, name: "jafree", Gender: "female", Age: "24" },
    { id: 4, name: "zain", Gender: "female", Age: "25" },
  ];
  const filterData = products.filter((data) => data.Gender == "female");
  console.log(filterData);
  return (
    <div>
      {filterData.map((data) => (
        <div key={data.id}>
          <h1>{data.name}</h1>
          <h2>{data.Age}</h2>
        </div>
      ))}
    </div>
  );
};

export default FilterProduct;
