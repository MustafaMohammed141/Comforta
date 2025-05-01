import React from "react";

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Comforta</h1>
        <nav className="space-x-6">
          <a href="#products" className="hover:text-indigo-600">
            Products
          </a>
          <a href="#about" className="hover:text-indigo-600">
            About
          </a>
          <a href="#contact" className="hover:text-indigo-600">
            Contact
          </a>
        </nav>
      </header>
    </>
  );
}
