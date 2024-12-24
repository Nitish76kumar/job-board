// StatCard.js
import React from "react";

const StatCard = ({ label, value }) => (
  <div className="flex flex-col items-center px-4">
    <div className="text-blue-600 text-4xl font-bold mb-1">{value}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

export default StatCard;
