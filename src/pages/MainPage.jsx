import React from "react";
import Header from "../components/header/Header";
import PriceComponent from "../components/priceComponent/PriceComponent";
import DidYouKnow from "../components/didYouKnow/DidYouKnow";

const MainPage = () => {
  return (
    <div>
      <Header />
      <PriceComponent />
      <DidYouKnow />
    </div>
  );
};

export default MainPage;
