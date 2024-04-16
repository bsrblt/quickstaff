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

interface AvailableJobsProps {
  jobs: Job[];
  onViewDetails: (details: string, index: number) => void;
  appliedJobIndices: (boolean | number)[];
  buttonText?: string;
}

const AvailableJobs: React.FC<AvailableJobsProps> = ({
  jobs,
  onViewDetails,
  appliedJobIndices,
}) => {
  return (
    <div className="grid items-center justify-center my-4">
      <section className="flex mt-5 px-3 justify-center">
        <div className="space-y-4 md:w-[44rem]">
          {jobs.length > 0 ? (
            jobs.map((job, index) => (
              <GlassCard key={index}>
                <div className="bg-color1/20 rounded-xl p-3">
                  <div className="sm:flex justify-between items-center sm:space-x-5">
                    <p className="text-white fontpop-3 sm:text-xl text-md ml-2">
                      {job.description}
                    </p>
                    <div className="min-w-[11.4rem] mb-2 px-2 transition-all duration-300">
                      <Button
                        type="button"
                        onClick={() => onViewDetails(job.details, index)}
                        disabled={appliedJobIndices.includes(index)}
                      >
                        {appliedJobIndices.includes(index)
                          ? "Applied"
                          : "View details"}
                      </Button>
                    </div>
                  </div>
                </div>
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
