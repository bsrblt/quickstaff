import React from "react";
import GlassCard from "./GlassCard";
import Button from "./Button";
// import getJobsList from "../../lib/jobs";

interface AvailableJobsProps {
  jobs: {
    jobTitle: string;
    startDate: string;
    endDate: string;
    location: string;
    experience: string;
    description: string;
  }[];
}

const AvailableJobs: React.FC<AvailableJobsProps> = /* async */ ({ jobs }) => {
  // const jobs = await getJobsList();
  console.log("Jobs in AvailableJobs:", jobs);
  return (
    <div className="grid items-center justify-center my-4">
      <div className="m-auto bg-gradient-to-t from-color1/20 rounded-xl backdrop-blur-[5px] lg:w-[44rem] w-[95%]">
        <h2 className="flex text-2xl font-bold my-2 fontpop-3 justify-center  text-white">
          Available Jobs:
        </h2>
      </div>

      <section className="flex mt-5 px-3 justify-center">
        <div className="space-y-4 md:w-[44rem]">
          {jobs.length > 0 ? (
            jobs.map((job: any, index: any) => (
              <GlassCard key={index}>
                <div className="bg-color1/20 rounded-xl p-3">
                  <div className="sm:flex justify-between items-center sm:space-x-5 ">
                    <p className="text-white fontpop-3 sm:text-xl text-md ml-2">
                      {job.description}
                    </p>
                    <div className="min-w-[8rem] mb-2 px-2">
                      <Button type="button">Apply</Button>
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
