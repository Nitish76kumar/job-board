import React from "react";

const JobDetailsItem = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-2">
    <Icon className="w-4 h-4 text-gray-400" />
    <span className="text-gray-600 text-sm">{text}</span>
  </div>
);

export default JobDetailsItem;
