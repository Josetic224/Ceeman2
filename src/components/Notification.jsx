import React from "react";

const Notification = ({ message, type, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 m-4 p-4 bg-white shadow-md border-l-4 ${
        type === "success" ? "border-green-500" : "border-red-500"
      }`}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-800">{message}</p>
        <button
          onClick={onClose}
          className="text-sm text-gray-600 ml-2 focus:outline-none"
        >
          &#x2715;
        </button>
      </div>
    </div>
  );
};

export default Notification;
