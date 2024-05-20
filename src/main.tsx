import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Features from "./components/Features";
import Products from "./components/Products";
import Features2 from "./components/Features2";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CalltoAction";

import Footer from "./components/Footer";
import "./style.css";
import Hero from "./components/Hero";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="container bg-[#E9FFFA] max-w-full   w-screen px-4 md:px-20 ">
      <Header />
      <Hero />
      <Features />
      <Products />
      <Features2 />
      <Pricing />
      <Testimonials />
      <CallToAction />

      <Footer />
    </div>
  </React.StrictMode>
);
