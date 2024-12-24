import React, { useState, useEffect } from "react";

const FeaturedEmployers = ({ logos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollInterval = 5000; // 5 seconds for slower auto-scroll
  const visibleLogos = 10; // Number of logos visible at a time

  // Automatic scrolling logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length); // Loop back to the first logo
    }, autoScrollInterval);

    return () => clearInterval(interval); // Clean up on unmount
  }, [logos.length]);

  // Get visible logos based on the current index
  const getVisibleLogos = () => {
    const extendedLogos = [...logos, ...logos.slice(0, visibleLogos)]; // For smooth looping
    return extendedLogos.slice(currentIndex, currentIndex + visibleLogos);
  };

  if (logos.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No logos available at the moment.
      </p>
    );
  }

  return (
    <div className="w-[90%] m-auto overflow-hidden py-8 bg-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
        Featured Employers
      </h2>
      <div className="flex justify-center items-center">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex / logos.length) * 100}%)`, // Adjust scroll based on the number of logos
          }}
        >
          {getVisibleLogos().map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/4 md:w-1/6 lg:w-1/6 xl:w-1/6 p-2"
            >
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="w-full h-auto object-contain border rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                style={{ maxWidth: "120px" }} // Adjust the max width of images
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedEmployers;
