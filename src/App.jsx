import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Footer from "./components/Footer";

export default function FurnitureLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header/>
      <Hero/>
      <Featured/>
      <Footer/>
    </div>
  );
}
