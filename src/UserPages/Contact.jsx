import React from "react";
import Header from './components/Header'
import Footer from '../UserPages/components/Footer'

const Contact = () => {
  return <div>
   <Header/>



   <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Text Section */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-4xl font-extrabold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              We at <strong>Comforta</strong> value your feedback and inquiries. If you have any questions or need more information about our products, feel free to reach out to us.
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-800">Our Address</h3>
              <p className="mt-2 text-gray-600">
                123 Furniture Street, Design District, Cairo, Egypt
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
              <ul className="mt-2 text-gray-600">
                <li>Email: <a href="mailto:info@coforta.com" className="text-blue-600">info@coforta.com</a></li>
                <li>Phone: <a href="tel:+201234567890" className="text-blue-600">+20 123 456 7890</a></li>
                <li>WhatsApp: <a href="https://wa.me/201234567890" className="text-blue-600">+20 123 456 7890</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="flex justify-center items-center">
            <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" id="name" name="name" className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" name="email" className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                  <textarea id="message" name="message" rows="4" className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message" required></textarea>
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>




    <Footer/>

  </div>;
};

export default Contact;
