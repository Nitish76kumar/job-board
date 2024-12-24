import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import JobDetail from "./component/JobDetail";
// import PostJob from "./component/PostJob";
// import Navbar from "./component/Navbar";
// import SearchBar from "./component/SearchBar";
import jobData from "./data/jobs.json"; // Import JSON file
import Header from "./components/Header";
import JobSearchSection from "./components/JobSearchSection";
import FeaturedJobs from "./components/FeaturedJobs";
import FeaturedEmployers from "./components/FeaturedEmployers";
import MobileAppSection from "./components/MobileAppSection";
import JobLocationsStats from "./components/JobLocationsStats";
import Footer from "./components/footer";
import EmployeeLogin from "./page/EmployeeLogin";
import Jobkeeper from "./page/Jobkeeper";

function App() {
  const logos = [
    "/logo/logo1.png",
    "/logo/logo2.png",
    "/logo/logo3.png",
    "/logo/logo6.png",
    "/logo/logo7.png",
    "/logo/logo8.png",
    "/logo/logo14.png",
    "/logo/logo16.png",
    "/logo/logo17.png",
    "/logo/logo18.png",
    "/logo/logo19.png",
    "/logo/logo20.png",
    "/logo/logo9.png",
    "/logo/logo10.png",
    "/logo/logo11.png",
    "/logo/logo12.png",
    "/logo/logo13.png",
    "/logo/logo14.png",
    "/logo/logo14.png",
    "/logo/logo16.png",
    "/logo/logo17.png",
    "/logo/logo18.png",
    "/logo/logo19.png",
    "/logo/logo20.png",
    "/logo/logo21.png",
    // Add more than 20 logo URLs here
  ];
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <JobSearchSection />
                <FeaturedJobs jobsData={jobData} />
                <FeaturedEmployers logos={logos} />
                <MobileAppSection />
                <JobLocationsStats />
              </>
            }
          />
          <Route path="/employee-login" element={<EmployeeLogin />} />
          <Route path="/jobkeeper" element={<Jobkeeper />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
