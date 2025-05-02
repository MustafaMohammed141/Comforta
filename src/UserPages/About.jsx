import React from "react";
import { useNavigate } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';

const About = () => {
  const navigate = useNavigate();

  // Company values for the values section
  const companyValues = [
    {
      id: 1,
      title: "Quality",
      description: "We use only the finest materials and work with skilled artisans to create furniture that stands the test of time.",
      image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Comfort",
      description: "Every piece we create is designed with your comfort in mind, ensuring that your furniture enhances your quality of life.",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "Sustainability",
      description: "We're committed to sustainable practices, using eco-friendly materials and processes to minimize our environmental impact.",
      image: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">About Comforta</h2>
            <p className="mt-4 text-xl text-gray-600">Transforming houses into homes since 2020</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Comforta Showroom" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Story</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A journey of passion, craftsmanship, and dedication to creating the perfect furniture for your home.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="prose max-w-none text-lg">
                <p className="mb-6 leading-relaxed">
                  Welcome to <span className="font-semibold text-indigo-600">Comforta</span>, your premier destination for high-quality, comfortable furniture that transforms houses into homes.
                </p>
                <p className="mb-6 leading-relaxed">
                  <span className="text-xl font-medium text-indigo-600">Founded in 2020</span>, Comforta has quickly established itself as a leader in the furniture industry, offering a wide range of products that combine style, comfort, and durability.
                </p>
                <p className="mb-6 leading-relaxed">
                  Our mission is to provide our customers with furniture that not only looks good but also enhances their quality of life. We believe that everyone deserves to live in a space that reflects their personality and meets their needs.
                </p>
                <p className="mb-6 leading-relaxed">
                  At Comforta, we work with skilled artisans and use only the finest materials to create furniture that stands the test of time. Our commitment to quality is unwavering, and we take pride in every piece that bears our name.
                </p>
              </div>
              <div className="mt-8 p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-600 shadow-md transform hover:scale-105 transition-transform duration-300">
                <p className="text-xl font-medium text-indigo-800 italic">
                  "Thank you for choosing Comforta. We look forward to helping you create the home of your dreams."
                </p>
                <p className="mt-2 text-right text-indigo-600 font-semibold">— The Comforta Team</p>
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
                  alt="Furniture Workshop" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Furniture Design" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Comfortable Living Room" 
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            <p className="mt-4 text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {companyValues.map((value) => (
              <div
                key={value.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-indigo-600">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Comforta Difference</h2>
          <p className="text-xl mb-8">Visit our showroom or browse our collection online to find the perfect furniture for your home.</p>
          <button 
            onClick={() => navigate('/shopping')}
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300"
          >
            Shop Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
