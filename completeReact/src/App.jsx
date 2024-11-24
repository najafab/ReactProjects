import React from "react";
import Props from "./Component/Props";
import Props2 from "./Component/Props2";
import Events from "./Component/Events";
import Counter from "./Component/Counter";
import ShowProduct from "./Component/ShowProduct";
import FilterProduct from "./Component/FilterProduct";
import Movies from "./MovieZone/Movies";

const App = () => {
  // const person = {
  //   name: "najaf abbas",
  //   phone: "03414770445",
  //   degree: "Bs",
  //   class: "17",
  // };

  return (
    <>
      {/* // <div>
    //   <Props Name="Najaf" Class="BS CE" University="Comsats" />
    //   <Props Name="Abbas" Class="BS CE" University="Comsats" />
    // </div> */}

      <div>
        {/* <Props2 /> */}
        {/* <Events /> */}
        {/* <Counter /> */}
        {/* <ShowProduct /> */}
        {/* <FilterProduct /> */}
        <Movies />
      </div>
    </>
  );
};

export default App;
