import React from "react";
import Header from './components/Header'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Footer from './components/Footer'
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      {/* Main Hero Banner */}
      <div className="bg-indigo-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Transform Your Space</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">Discover furniture that brings comfort, style, and functionality to your home.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/shopping" className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Shop Now
            </Link>
            <Link to="/aboutus" className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-700 px-8 py-3 rounded-full font-medium text-lg transition-all duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: 'Living Room',
              image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
              name: 'Bedroom',
              image: 'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
              name: 'Dining',
              image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
              name: 'Office',
              image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            }
          ].map((category) => (
            <div key={category.name} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white font-semibold text-xl p-4">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Hero title="Best Sellers" subtitle="Our most popular furniture picks" />
      <Featured title="Just Arrived" />

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Interior Designer",
                quote: "The quality of furniture from Comforta is exceptional. My clients are always impressed with the craftsmanship and durability.",
                avatar: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg"
              },
              {
                name: "Michael Chen",
                role: "Homeowner",
                quote: "We furnished our entire living room with pieces from Comforta. The comfort and style exceeded our expectations.",
                avatar: "https://xsgames.co/randomusers/assets/avatars/male/2.jpg"
              },
              {
                name: "Emily Rodriguez",
                role: "Apartment Dweller",
                quote: "The space-saving furniture options were perfect for my small apartment. Stylish and functional!",
                avatar: "https://xsgames.co/randomusers/assets/avatars/female/3.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <div className="mt-4 text-amber-500">
                  {"★".repeat(5)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-indigo-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-gray-700">Subscribe to our newsletter for exclusive offers, design tips, and new arrivals.</p>
          </div>
          <div className="md:w-1/2">
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg flex-grow"
              />
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Landing
