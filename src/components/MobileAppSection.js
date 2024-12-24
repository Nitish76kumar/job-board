import React from "react";

const MobileAppSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
      {/* Left Section - Text and Download Buttons */}
      <div className="mb-8 md:mb-0 md:w-1/2">
        <h2 className="text-3xl font-bold mb-2">APPLY TO JOBS ON-THE-GO</h2>
        <h3 className="text-blue-600 text-xl mb-4">Jobringer Mobile App</h3>

        {/* Store Badges Container */}
        <div className="mb-6">
          <div className="flex gap-4 mb-4">
            {/* Google Play Button */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                src="/logo/googlePlay.png" // Reference the image directly from the public folder
                alt="Google Play Logo"
                className="h-12 sm:h-10 md:h-12"
              />
            </a>

            {/* App Store Button (Replace with actual App Store logo) */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                src="/logo/appStore.png" // Replace with App Store logo
                alt="Download on the App Store"
                className="h-12 sm:h-10 md:h-12"
              />
            </a>
          </div>
        </div>

        {/* Mobile App Download Text */}
        <div className="flex items-center gap-2">
          <h3 className="text-2xl text-gray-800">Mobile App</h3>
          <a
            href="#"
            className="text-2xl text-blue-600 hover:text-blue-700 font-medium"
          >
            Download
          </a>
        </div>
      </div>

      {/* Right Section - Phone Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] h-auto">
          <img
            src="/logo/jobfinder.png" // Replace with actual phone image
            alt="Jobringer Mobile App Interface"
            className="object-contain w-full h-full transform rotate-[-10deg]"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
