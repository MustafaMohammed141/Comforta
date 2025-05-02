import React from "react";
import Header from './components/Header'
import Footer from '../UserPages/components/Footer'
const About = () => {
  return <div>
<Header/>
<section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Text Section */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-4xl font-extrabold text-gray-900">About Comforta</h2>
            <p className="mt-4 text-lg text-gray-600">
              Welcome to <strong>Comforta</strong>, where elegance meets comfort in every piece. Established with a passion for timeless design and quality craftsmanship, we offer a curated selection of furniture that transforms spaces into havens of style and functionality.
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
              <p className="mt-2 text-gray-600">
                At Coforta, our mission is to provide exceptional furniture solutions that blend aesthetic appeal with practical functionality. We aim to enhance the living experiences of our customers by offering pieces that are not only beautiful but also durable and comfortable.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-800">Our Values</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-600">
                <li>Quality Craftsmanship</li>
                <li>Customer-Centric Approach</li>
                <li>Innovation</li>
                <li>Sustainability</li>
              </ul>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              className="w-full max-w-md rounded-lg shadow-lg"
              src="../../public/image/c1.png"
              alt="Comforta Furniture Showroom"
            />
          </div>
        </div>
      </div>
    </section>
    <Footer/>




  </div>;
};

export default About;
