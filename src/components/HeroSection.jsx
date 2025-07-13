import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function HeroSection() {
  const [trackingId, setTrackingId] = useState("");
  const navigate = useNavigate();

  const handleTrackNow = () => {
    if (trackingId.trim()) {
      navigate(`/track/${trackingId.trim()}`);
    }
  };

  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/home-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          A Trusted Provider of Courier Services
        </h2>
        <p className="text-lg md:text-xl mb-10">
          We deliver your products safely to your home in a reasonable time and price
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Enter your tracking number"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="w-full md:w-2/3 px-4 py-3 border rounded-md shadow-sm text-white focus:outline-none"
          />
          <button
            onClick={handleTrackNow}
            className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition font-medium">
            Track Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection