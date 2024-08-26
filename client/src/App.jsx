import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import BannerPage from "./pages_banner/bannerPage";
import TopHeader from "./components/topHeader/TopHeader";

function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <BannerPage/>
      <Footer />
    </>
  );
}

export default App;
