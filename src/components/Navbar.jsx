import React, { useState } from "react";
import AuthModal from "./AuthModal";

function Navbar() {
  const [showModal, setShowModal] = useState(false); // react hook.'showModal; keeps track of whether the login popup should be shown. 'setShowModal(true)' shows it and 'setShowModal(false)' hides it.

  return (
    <>
      <nav className="bg-white shadow py-4 px-8 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">SS International</h1>
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
          <li><a href="#services" className="hover:text-blue-600">Services</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact Us</a></li>
          <li>
            <button 
              onClick={() => setShowModal(true)} 
              className="bg-orange-500 text-white px-4 py-1.5 rounded hover:bg-orange-600 transition"
            >
              Sign UP
            </button>
          </li>
        </ul>
      </nav>
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default Navbar