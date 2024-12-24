// LocationTag.js
import React from "react";

const LocationTag = ({ name }) => (
  <span className="inline-block bg-white/60 hover:bg-white/80 px-3 py-1 rounded-full text-gray-700 hover:text-blue-600 cursor-pointer transition-colors m-1">
    #{name}
  </span>
);

export default LocationTag;
