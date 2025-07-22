import React from "react";
import { useParams } from "react-router-dom";

const TrackingDetails = () => {
  const { trackingId } = useParams();

  // Expanded dummy data (replace with real backend fetch later)
  const dummyData = {
    "123456": {
      status: "In Transit",
      from: "Singapore",
      to: "Colombo, Sri Lanka",
      expected: "2025-07-15",
      events: [
        { time: "2025-07-12 08:00", description: "Shipment picked up" },
        { time: "2025-07-13 14:20", description: "Left origin facility" },
        { time: "2025-07-14 09:10", description: "Arrived at Colombo Hub" },
        { time: "2025-07-15 08:30", description: "Out for delivery" },
      ],
    },
    "654321": {
      status: "Delivered",
      from: "London, UK",
      to: "Kandy, Sri Lanka",
      expected: "2025-07-10",
      events: [
        { time: "2025-07-08 10:00", description: "Shipment picked up" },
        { time: "2025-07-09 15:00", description: "In transit to Colombo" },
        { time: "2025-07-10 09:00", description: "Delivered to recipient" },
      ],
    },
    "789012": {
      status: "Pending Pickup",
      from: "New Delhi, India",
      to: "Galle, Sri Lanka",
      expected: "2025-07-18",
      events: [
        { time: "2025-07-16 11:00", description: "Shipment created, awaiting pickup" },
      ],
    },
    "345678": {
      status: "Out for Delivery",
      from: "Dubai, UAE",
      to: "Colombo, Sri Lanka",
      expected: "2025-07-14",
      events: [
        { time: "2025-07-12 07:30", description: "Picked up from sender" },
        { time: "2025-07-13 12:45", description: "Arrived at customs in Colombo" },
        { time: "2025-07-14 07:00", description: "Out for delivery" },
      ],
    },
  };

  const trackingData = dummyData[trackingId];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Tracking Details
        </h2>
        <p className="text-center text-gray-500 mb-4">
          Tracking ID: <span className="font-medium text-gray-800">{trackingId}</span>
        </p>

        {trackingData ? (
          <>
            <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Status</p>
                <p className="font-semibold text-green-600">{trackingData.status}</p>
              </div>
              <div>
                <p className="text-gray-600">Expected Delivery</p>
                <p className="font-semibold">{trackingData.expected}</p>
              </div>
              <div>
                <p className="text-gray-600">From</p>
                <p className="font-medium">{trackingData.from}</p>
              </div>
              <div>
                <p className="text-gray-600">To</p>
                <p className="font-medium">{trackingData.to}</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Tracking Timeline</h4>
              <ol className="relative border-l border-blue-300 pl-4">
                {trackingData.events.map((e, i) => (
                  <li key={i} className="mb-5 ml-2">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5"></div>
                    <time className="mb-1 text-xs text-gray-500">{e.time}</time>
                    <p className="text-gray-800">{e.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </>
        ) : (
          <p className="text-red-600 text-center mt-4">
            Tracking information not found. Please check your tracking ID.
          </p>
        )}
      </div>
    </div>
  );
};

export default TrackingDetails;
