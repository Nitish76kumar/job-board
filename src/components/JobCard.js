import React from "react";
import { Clock, Calendar, MapPin } from "lucide-react";
import JobBadge from "./JobBadge";
import JobDetailsItem from "./JobDetailsItem";
import ApplyButton from "./ApplyButton";

const JobCard = ({ job }) => {
  const { title, company, type, jobMode, experience, location } = job;

  return (
    <div className="border rounded-lg p-4 w-72 bg-white">
      <div className="mb-4">
        <JobBadge mode={jobMode} />
      </div>

      <h3 className="text-blue-800 font-semibold mb-2 min-h-[48px]">{title}</h3>
      <div className="text-gray-700 mb-4">{company}</div>

      <div className="space-y-3 mb-4" >
        <JobDetailsItem icon={Clock} text={type} />
        <JobDetailsItem icon={Calendar} text={experience} />
        <JobDetailsItem icon={MapPin} text={location} />
      </div>

      <ApplyButton />
    </div>
  );
};

export default JobCard;
