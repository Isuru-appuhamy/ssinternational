import React from "react";

const features = [
  "International Service Coverage",
  "24 hour Customer Service & Management",
  "Real Time Tracking System",
  "On-Time Delivery Service"
];

function Features() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border gap-6 max-w-5xl mx-auto">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-blue-700">{feature}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features