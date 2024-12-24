import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import JobCard from "./JobCard";
import CarouselButton from "./CarouselButton";

const FeaturedJobs = ({ jobsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const jobs = jobsData?.featuredJobs || []; // Handle undefined or null jobsData

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === jobs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? jobs.length - 1 : prevIndex - 1
    );
  };

  const getVisibleJobs = () => {
    let visibleJobs = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % jobs.length;
      visibleJobs.push(jobs[index]);
    }
    return visibleJobs;
  };

  if (jobs.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Featured Jobs</h2>
        <p className="text-gray-600">
          No featured jobs available at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className=" w-[100%] flex flex-col items-center justify-center px-4 py-8">
      <h2 className="text-2xl font-bold text-blue-800 text-center mb-8">
        Featured Jobs
      </h2>

      <div className="relative">
        <div className="flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <CarouselButton
            direction="Previous"
            icon={ChevronLeft}
            onClick={prevSlide}
          />

          {/* Job Cards */}
          <div className="flex gap-6 overflow-hidden w-full ">
            {getVisibleJobs().map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {/* Right Arrow */}
          <CarouselButton
            direction="Next"
            icon={ChevronRight}
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
