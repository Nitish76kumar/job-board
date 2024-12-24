// JobLocationsStats.js
import React from "react";
import LocationTag from "./LocationTag";
import StatCard from "./StatCard";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTelegram,
  FaReact,
} from "react-icons/fa";

const JobLocationsStats = () => {
  const indiaLocations = [
    "Mumbai",
    "Delhi",
    "Ajmer",
    "Pune",
    "Hyderabad",
    "Agra",
    "Chennai",
    "Kolkata",
    "Indore",
    "Gurugram",
    "Jaipur",
    "Ahmedabad",
  ];

  const internationalLocations = [
    "Africa",
    "USA",
    "UK",
    "Australia",
    "Canada",
    "Singapore",
    "Dubai",
    "Saudi Arabia",
    "New Zealand",
  ];

  const stats = [
    { label: "Jobs Posted", value: "32621" },
    { label: "Jobs Filled", value: "15153" },
    { label: "Employers", value: "20673" },
    { label: "Active Users", value: "1302016" },
  ];

  return (
    <div className="l mx-auto px-4 py-8 bg-custom-teal ">
      {/* Locations Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-8 bg-blue-50/50 p-6 rounded-lg">
        {/* Jobs in India */}
        <div>
          <h2 className="text-xl font-bold mb-4">JOBS IN INDIA</h2>
          <div className="flex flex-wrap">
            {indiaLocations.map((location) => (
              <LocationTag key={location} name={location} />
            ))}
          </div>
        </div>

        {/* International Jobs */}
        <div>
          <h2 className="text-xl font-bold mb-4">INTERNATIONAL JOBS</h2>
          <div className="flex flex-wrap">
            {internationalLocations.map((location) => (
              <LocationTag key={location} name={location} />
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-gray-200">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="w-[95%] mx-auto flex flex-col justify-between">
        <div className="flex">
          <p className=" ml-7 text-md w-[80%] items-center font-normal">
            <span className=" font-semibold">Disclaimer:</span> All Trademarks
            and Logos are the property of their respective owners, depicted here
            purely for representation purpose.Jobringer.com has taken all
            reasonable steps to ensure that information on this site is genuine.
            Job Applicants are advised to evaluate independently. Jobringer.com
            shall not have any responsibility in this regard. All Jobseeker
            services are strictly designed & meant only for job search
            assistance and to maximize the chances for the jobseekers to get
            their dream job. All Job Seeker Credentials and Employment
            Opportunities are subject to individual merit & evaluation. We do
            not guarantee any job to any jobseeker.
          </p>
          <p className="text-md ml-10">
            Recognized By:{" "}
            <a href="#" className="text-orange-500 text-2xl">
              #startupindia
            </a>
          </p>
        </div>

        <div className="flex space-x-4 items-center justify-end">
          <h2 className="text-lg font-semibold">Follow us on:-</h2>

          <a
            href="https://wa.me/yourphonenumber"
            className="text-green-500 hover:text-green-400"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>
          <a
            href="https://facebook.com"
            className="text-blue-600 hover:text-blue-500"
          >
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            className="text-blue-400 hover:text-blue-300"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            className="text-pink-500 hover:text-pink-400"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            className="text-blue-700 hover:text-blue-600"
          >
            <FaLinkedinIn className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com"
            className="text-red-500 hover:text-red-400"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
          <a
            href="https://t.me/yourchannel"
            className="text-blue-400 hover:text-blue-300"
          >
            <FaTelegram className="w-6 h-6" />
          </a>

          {/* Adding the React icon */}
          <a
            href="https://reactjs.org"
            className="text-blue-500 hover:text-blue-400"
          >
            <FaReact className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobLocationsStats;
