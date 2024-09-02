import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Banner from "./pages/banner/Banner";
import TopHeader from "./components/topHeader/TopHeader";
import Home from "./pages/home/Home";
import { Login } from "./pages/user/login/Login";
import { Register } from "./pages/user/register/Register";
import PageNotFound from "./pages/not_found/PageNotFound";
import LearnMore from "./pages/learn-more/LearnMore";
import AboutUs from "./pages/aboutUs/AboutUs";

function App() {
  useEffect(() => {}, []);

  return (
    <>
      <Router>
        <TopHeader title="Sastobazar Rewards" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sastobazar-login" element={<Login />} />
          <Route path="/sastobazar-register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/more-info" element={<LearnMore />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
