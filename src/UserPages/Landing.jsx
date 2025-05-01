import React from "react";
import Header from './components/Header'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Footer from './components/Footer'

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero title="Best Sellers" subtitle="Our most popular furniture picks" />
      <Featured title="Just Arrived" />
      <Footer />
    </div>
  )
}

export default Landing