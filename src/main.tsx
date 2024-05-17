import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Features from "./components/Features";
import Products from "./components/Products";
import Features2 from "./components/Features2";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import CalltoAction from "./components/CalltoAction";
import Desktop from "./components/Desktop";
import Footer from "./components/Footer";
import "./style.css";




ReactDOM.createRoot(document.getElementById("root")!).render(
 
  <React.StrictMode>
      
      <Header/>
      <Features/>
      <Products/>
      <Features2/>
      <Pricing/>
      <Testimonials/>
      <CalltoAction/>
      <Desktop/>
      <Footer />
    
  </React.StrictMode>,
);
