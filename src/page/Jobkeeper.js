// Jobkeeper.js
import React from "react";

const Jobkeeper = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Jobkeeper Page
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Welcome to the Jobkeeper Page. This is where job keepers can manage
          job listings, applications, and more.
        </p>

        {/* Add Jobkeeper functionalities like job listings, notifications, etc. */}
        <div className="flex justify-center">
          <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
            Manage Job Listings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobkeeper;
