import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact Info</h4>
          <p>Email: info@ssinternational.com</p>
          <p>Phone: +94 11 2766775</p>
          <p>WhatsApp: +94 70 3305928</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Address</h4>
          <p>No: 19/1, Base Line road, Maradana, Sri Lanka</p>
          <p>SS International Express PVT(LTD)</p>
        </div>
      </div>
      <p className="text-center text-gray-400 text-xs mt-10">&copy; {new Date().getFullYear()} SS International. All rights reserved.</p>
    </footer>
  );
}

export default Footer