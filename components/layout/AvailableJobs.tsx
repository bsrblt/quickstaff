import React, { useState } from "react";
import GlassCard from "./GlassCard";
import Button from "./Button";

interface Job {
  jobTitle: string;
  startDate: string;
  endDate: string;
  location: string;
  experience: string;
  description: string;
  hasApplied?: boolean;
}

interface AvailableJobsProps {
  jobs: Job[];
}

const AvailableJobs: React.FC<AvailableJobsProps> = ({ jobs }) => {
  const [jobApplications, setJobApplications] = useState<boolean[]>(
    jobs.map(() => false)
  );

  const applyHandler = (index: number) => () => {
    const newApplications = [...jobApplications];
    newApplications[index] = true;
    setJobApplications(newApplications);
  };

  return (
    <div className="grid items-center justify-center my-4">
      <div className="m-auto bg-gradient-to-t from-color1/90 rounded-xl lg:w-[44rem] w-[95%]">
        <h2 className="flex text-2xl font-bold my-2 fontpop-3 justify-center  text-white">
          Available Jobs:
        </h2>
      </div>
      <section className="flex mt-5 px-3 justify-center">
        <div className="space-y-4 md:w-[44rem]">
          {jobs.length > 0 ? (
            jobs.map((job, index) => (
              <GlassCard key={index}>
                <div className="bg-color1/20 rounded-xl p-3">
                  <div className="sm:flex justify-between items-center sm:space-x-5 ">
                    <p className="text-white fontpop-3 sm:text-xl text-md ml-2">
                      {job.description}
                    </p>
                    <div className="min-w-[8rem] mb-2 px-2">
                      <Button
                        type="button"
                        onClick={applyHandler(index)}
                        disabled={jobApplications[index]}
                      >
                        {jobApplications[index] ? "Applied" : "Apply"}
                      </Button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))
          ) : (
            <p className="text-white text-center">No jobs available.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default AvailableJobs;
