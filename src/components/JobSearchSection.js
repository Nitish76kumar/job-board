import React, { useState } from "react";
import { Search } from "lucide-react";

const JobSearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const jobCategories = [
    "Fresher",
    "Work From Home",
    "WFH",
    "IT",
    "HR",
    "Back Office",
    "BPO Jobs",
    "ITES",
    "Finance",
    "Accounts",
    "Medical",
    "Pharma",
    "Manager",
    "Developer",
    "Marketing",
    "Engineering",
    "Non Government Jobs",
  ];

  const handleSearch = () => {
    // Logic to handle the search
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Main Title */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-blue-900 mb-2">
          BRINGING YOU THE PERFECT JOB!
        </h1>
        <p className="text-lg text-gray-700">11,000+ JOBS to Apply</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Search Box Section */}
        <div className="bg-teal-200 rounded-lg p-6 shadow-md">
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Search Jobs Now"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 p-3 rounded border border-gray-200 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleSearch}
              className="bg-yellow-400 px-6 py-2 rounded hover:bg-yellow-500 transition-colors"
            >
              Search
            </button>
          </div>

          <div className="flex gap-3">
            <button className="bg-white px-6 py-2 rounded hover:bg-gray-50 transition-colors">
              View Jobs
            </button>
            <button className="bg-yellow-400 px-6 py-2 rounded hover:bg-yellow-500 transition-colors">
              Register For FREE
            </button>
          </div>
        </div>

        {/* Quick Job Search Section */}
        <div className="bg-teal-200 rounded-lg p-6 shadow-md">
          <div className="flex items-center gap-2 mb-4 text-blue-900 font-semibold">
            <h2 className="text-lg">Quick Job Search</h2>
            <Search className="w-5 h-5" />
          </div>

          <div className="flex flex-wrap gap-2">
            {jobCategories.map((category, index) => (
              <span
                key={index}
                className="bg-white px-3 py-1 rounded-full text-sm hover:bg-gray-50 cursor-pointer transition-colors"
              >
                #{category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearchSection;
