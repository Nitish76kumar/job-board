import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      {/* Footer Links Section */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center gap-8 mb-4">
          <a href="#" className="hover:text-white transition-colors">
            Terms and Conditions
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Refund/Cancellation Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            About Us
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact Us
          </a>
          <a href="#" className="hover:text-white transition-colors">
            FAQ
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Blogs
          </a>
        </div>
      </div>

      {/* Footer Copyright Section */}
      <div className="mt-4 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} All Rights Reserved @ Jobtech Ventures
        Private Limited.
      </div>
    </footer>
  );
};

export default Footer;
