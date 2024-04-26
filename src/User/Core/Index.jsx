import React from "react";
import Service from "../Components/Service";
import Products from "../Components/Products";
import BottomBar from "../Components/BottomBar";
import Articles from "../Components/Articles";
import Landing from "../Components/Landing";

const Index = () => {
  

  return (
    <div>
      <Landing/>

      <Products />
      <Articles/>



      <div>
      <Service/>
      <BottomBar/>
    </div>
    </div>
  );
};

export default Index;
