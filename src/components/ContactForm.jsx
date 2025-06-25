import React from "react";

function ContactForm() {
  return (
    <section id="contact" className="py-20 px-6 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">The Safest Distance Between Two Points</h2>
      <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="Enter your Name" className="px-4 py-3 border border-gray-300 rounded-md" />
        <input type="email" placeholder="Enter your Email" className="px-4 py-3 border border-gray-300 rounded-md" />
        <input type="text" placeholder="Enter your Phone" className="px-4 py-3 border border-gray-300 rounded-md md:col-span-2" />
        <textarea placeholder="Enter your Message" className="px-4 py-3 border border-gray-300 rounded-md md:col-span-2" rows="4"></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition md:col-span-2 font-medium">Send</button>
      </form>
    </section>
  );
}

export default ContactForm