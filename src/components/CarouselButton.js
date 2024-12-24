import React from "react";

const CarouselButton = ({ direction, icon: Icon, onClick }) => (
  <button
    onClick={onClick}
    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
    aria-label={`${direction} job`}
  >
    <Icon className="w-6 h-6" />
  </button>
);

export default CarouselButton;
