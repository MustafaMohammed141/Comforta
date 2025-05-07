import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsPinterest } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Footer() {
	return (
		<>

			<footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center mb-6 sm:mb-0">
            <img
              className="h-12 mr-3"
              src="../../../public/image/c1.png"
              alt="Coforta Logo"
            />
            <span className="text-2xl font-semibold">Comforta</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link to="/aboutus"> <a href="../About.jsx" className="hover:text-gray-400">About Us</a></Link>
            <Link to="/contactus"><a href="../contact" className="hover:text-gray-400">Contact</a></Link>
            <Link to="/login"> <a href="#privacy" className="hover:text-gray-400">Log in</a></Link>

            
           
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center space-x-6">
          <a href="https://facebook.com/coforta" className="text-gray-400 hover:text-white">
            <BsFacebook className="h-6 w-6" />
          </a>
          <a href="https://instagram.com/coforta" className="text-gray-400 hover:text-white">
            <BsInstagram className="h-6 w-6" />
          </a>
          <a href="https://twitter.com/coforta" className="text-gray-400 hover:text-white">
            <BsTwitter className="h-6 w-6" />
          </a>
          <a href="https://pinterest.com/coforta" className="text-gray-400 hover:text-white">
            <BsPinterest className="h-6 w-6" />
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Coforta. All rights reserved.</p>
        </div>
      </div>
    </footer>
		</>

	);
}
