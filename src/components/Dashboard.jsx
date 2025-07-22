import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [order, setOrder] = useState({
    trackingId: "",
    senderName: "",
    senderAddress: "",
    receiverName: "",
    receiverAddress: "",
    packageWeight: "",
    deliveryDate: "",
    status: "New Booked"
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order Added: ${JSON.stringify(order, null, 2)}`);
    setShowModal(false);
    setOrder({
      trackingId: "",
      senderName: "",
      senderAddress: "",
      receiverName: "",
      receiverAddress: "",
      packageWeight: "",
      deliveryDate: "",
      status: "New Booked"
    });
  };

  const statuses = [
    { label: "New Booked", count: 8, color: "bg-blue-500" },
    { label: "Pick up in progress", count: 12, color: "bg-blue-400" },
    { label: "Picked up", count: 6, color: "bg-green-500" },
    { label: "Parcel Received at Office", count: 15, color: "bg-yellow-500" },
    { label: "Preparing Package at Warehouse", count: 3, color: "bg-yellow-400" },
    { label: "Parcel in Transit", count: 55, color: "bg-blue-300" },
    { label: "Parcel Received at Destination", count: 30, color: "bg-green-400" },
    { label: "Out for Delivery", count: 14, color: "bg-pink-500" },
    { label: "Delivered", count: 22, color: "bg-green-600" },
    { label: "Refused by Consignee", count: 1, color: "bg-red-400" },
    { label: "Consignee Not Responding", count: 3, color: "bg-red-500" },
    { label: "Re-attempt", count: 2, color: "bg-orange-400" },
    { label: "Return Received at Origin", count: 0, color: "bg-purple-500" },
    { label: "Returned to Origin City", count: 0, color: "bg-purple-400" },
    { label: "Parcel Return to Office", count: 0, color: "bg-purple-600" },
    { label: "Return in Process", count: 1, color: "bg-yellow-600" },
    { label: "Returned to Shipper", count: 0, color: "bg-gray-500" },
    { label: "Ready for Pickup", count: 7, color: "bg-blue-600" },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6 space-y-4">
        <h1 className="text-xl font-bold mb-6">Admin</h1>
        <nav className="space-y-2">
          <a href="#" className="block py-2 px-3 rounded hover:bg-blue-700 bg-red-600">Dashboard</a>
          <a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">Profile</a>
          <a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">View Orders</a>
          <a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">Payments</a>
        </nav>
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 mt-6 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 p-8">
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Order
          </button>
        </div>

        {/* Add Order Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
              <h2 className="text-xl font-bold mb-4">New Order</h2>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="trackingId"
                  placeholder="Tracking ID"
                  value={order.trackingId}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="senderName"
                  placeholder="Sender Name"
                  value={order.senderName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="senderAddress"
                  placeholder="Sender Address"
                  value={order.senderAddress}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="receiverName"
                  placeholder="Receiver Name"
                  value={order.receiverName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="receiverAddress"
                  placeholder="Receiver Address"
                  value={order.receiverAddress}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="number"
                  name="packageWeight"
                  placeholder="Package Weight (kg)"
                  value={order.packageWeight}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="date"
                  name="deliveryDate"
                  value={order.deliveryDate}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
                <select
                  name="status"
                  value={order.status}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="New Booked">New Booked</option>
                  <option value="In Transit">In Transit</option>
                  <option value="Delivered">Delivered</option>
                </select>
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 bg-gray-300 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                  >
                    Save Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Status cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {statuses.map((status, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full ${status.color} flex items-center justify-center text-white`}>
                  {status.count}
                </div>
                <p className="text-gray-700">{status.label}</p>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default Dashboard;
