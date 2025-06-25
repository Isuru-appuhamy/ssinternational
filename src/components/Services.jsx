import React from "react";

const services = [
  {
    title: "Cargo",
    description: "Our cargo handling service is for bulk movement of goods and is mostly on port to port basis. Cargo is most cost effective service but has a longer transit time."
  },
  {
    title: "International Warehousing & Fulfillment",
    description: "Our warehousing and fulfilment facility enables our customers to store their products in our China and SL warehouse..."
  },
  {
    title: "International Courier",
    description: "If you want your parcels to reach their destination within 5-8 days, courier service is the option. Our courier service focuses on express and door-to-door delivery."
  }
];

function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Services & Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div key={idx} className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition text-left">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services