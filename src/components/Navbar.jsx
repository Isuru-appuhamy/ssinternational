import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">SS International</h1>
      <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
        <li><a href="#home" className="hover:text-blue-600">Home</a></li>
        <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
        <li><a href="#services" className="hover:text-blue-600">Services</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact Us</a></li>
        <li><a href="#register" className="text-blue-600 font-semibold">Sign Up</a></li>
      </ul>
    </nav>
  );
}

export default Navbar