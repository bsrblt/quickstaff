import React from "react";
import GlassCard from "./GlassCard";
import Button from "./Button";

export interface Job {
  jobTitle: string;
  startDate?: string;
  endDate?: string;
  location: string;
  experience: string;
  description: string;
  details: string;
  hasApplied?: boolean;
}

interface JobCardProps {
  job: Job;
  index: number;
  onViewDetails: (details: string, index: number) => void;
  applied: boolean;
}

const JobCard: React.FC<JobCardProps> = ({
  job,
  index,
  onViewDetails,
  applied,
}) => {
  return (
    <div
      className={`bg-${
        applied ? "color2/30" : "color1/40"
      } rounded-xl p-3 cursor-pointer`}
      onClick={() => onViewDetails(job.details, index)}
    >
      <div className="sm:flex justify-between items-center sm:space-x-5">
        <p
          className={`text-${
            applied ? "gray-300" : "white"
          } fontpop-3 sm:text-xl text-md ml-2`}
        >
          {job.description}
        </p>
        <div className="min-w-[11.4rem] mb-2 px-2 transition-all duration-300">
          <Button type="button" disabled={applied}>
            {applied ? "Applied" : "View details"}
          </Button>
        </div>
      </div>
    </div>
  );
};

interface AvailableJobsProps {
  jobs: Job[];
  onViewDetails: (details: string, index: number) => void;
  appliedJobIndices: number[];
  renderModalContent: (index: number) => JSX.Element;
}

const AvailableJobs: React.FC<AvailableJobsProps> = ({
  jobs,
  onViewDetails,
  appliedJobIndices,
}) => {
  return (
    <div className="grid items-center justify-center my-4">
      <section className="flex px-3 justify-center">
        <div className="space-y-4 md:w-[44rem]">
          {jobs.length > 0 ? (
            jobs.map((job, index) => (
              <GlassCard key={index}>
                <JobCard
                  index={index}
                  job={job}
                  onViewDetails={onViewDetails}
                  applied={appliedJobIndices.includes(index)}
                />
              </GlassCard>
            ))
          ) : (
            <p className="text-white text-center bg-color2 rounded-xl">
              No jobs are available in these terms.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default AvailableJobs;
