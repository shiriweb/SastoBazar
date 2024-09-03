// import React, { useEffect } from "react";
import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

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
import ProductView from "./pages/product/product-view/ProductView";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Router>
      <ToastContainer/>
        <TopHeader title="Sastobazar Rewards" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sastobazar-login" element={<Login />} />
          <Route path="/sastobazar-register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/more-info" element={<LearnMore />} />
          <Route
            path="/product-view/:id"
            element={<ProductView isLoading={isLoading} products={products} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
