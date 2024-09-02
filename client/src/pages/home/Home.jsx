import React from "react";
import Banner from "../banner/Banner";
import Products from "../product/Products";

const Home = () => {
  return (
    <>
      <div className="bannerpage">
        <Banner />
      </div>

      <div>
      <Products/>
      
      </div>

    </>
  );
};

export default Home;