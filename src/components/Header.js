import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // useNavigate here

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Navigation Bar */}
      <div className="border-b shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-col">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-700 flex items-center underline"
            >
              job<span className="text-black">Ringer</span>
              <span className="text-blue-700 ml-1 text-2xl">≫</span>
            </Link>
            <span className="text-xs text-gray-600 mr-6">
              India's Job Portal
            </span>
          </div>

          {/* Navigation Links for larger screens */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/jobs" className="text-gray-700 hover:text-blue-600">
              Jobs
            </Link>
            <Link to="/employers" className="text-gray-700 hover:text-blue-600">
              Active Employers
            </Link>
            <Link to="/blogs" className="text-gray-700 hover:text-blue-600">
              Job Blogs
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600">
              Pricing
            </Link>
          </nav>

          {/* Hamburger Menu for smaller screens */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/jobkeeper"
              className="px-4 py-2 text-gray-700 hover:text-blue-600"
            >
              Jobseeker Login
            </Link>
            <Link
              to="/employee-login"
              className="px-4 py-2 bg-yellow-400 rounded hover:bg-yellow-500 transition-colors"
            >
              Employer Login
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white shadow-lg absolute top-16 left-0 w-full z-10`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <Link to="/jobs" className="text-gray-700 hover:text-blue-600">
            Jobs
          </Link>
          <Link to="/employers" className="text-gray-700 hover:text-blue-600">
            Active Employers
          </Link>
          <Link to="/blogs" className="text-gray-700 hover:text-blue-600">
            Job Blogs
          </Link>
          <Link to="/pricing" className="text-gray-700 hover:text-blue-600">
            Pricing
          </Link>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
