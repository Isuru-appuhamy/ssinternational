import React from "react";
import { useParams } from "react-router-dom";

const TrackingDetails = () => {
  const { trackingId } = useParams();

  // Dummy data (replace with real backend fetch later)
  const dummyData = {
    "123456": {
      status: "In Transit",
      from: "Singapore",
      to: "Colombo, Sri Lanka",
      expected: "2025-07-15",
      events: [
        { time: "2025-07-12 08:00", description: "Shipment picked up" },
        { time: "2025-07-13 14:20", description: "Left origin facility" },
      ],
    },
  };

  const trackingData = dummyData[trackingId];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Tracking ID: {trackingId}</h2>
      {trackingData ? (
        <>
          <p><strong>Status:</strong> {trackingData.status}</p>
          <p><strong>From:</strong> {trackingData.from}</p>
          <p><strong>To:</strong> {trackingData.to}</p>
          <p><strong>Expected Delivery:</strong> {trackingData.expected}</p>
          <h4 className="mt-4 font-semibold">Timeline:</h4>
          <ul className="list-disc ml-6">
            {trackingData.events.map((e, i) => (
              <li key={i}>
                <span className="text-sm text-gray-600">{e.time}</span> – {e.description}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-red-600 mt-4">Tracking information not found.</p>
      )}
    </div>
  );
};

export default TrackingDetails;
