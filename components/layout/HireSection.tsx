import React, { useState, useEffect } from "react";
import AvailableJobs from "./AvailableJobs";
import EventSetupForm from "./EventSetupForm";
import MainTitle from "./MainTitle";
import ConditionalText from "./ConditionalText";

interface HireSectionProps {
  backgroundUrl: string;
  hireWord: string;
  selectedCity: string;
  selectedExp: string;
  jobs: {
    jobTitle: string;
    startDate: string;
    endDate: string;
    location: string;
    experience: string;
    description: string;
  }[];
  onFormSubmit: (city: string, exp: string) => void;
}

const HireSection: React.FC<HireSectionProps> = ({
  backgroundUrl,
  hireWord,
  selectedCity,
  selectedExp,
  jobs,
  onFormSubmit,
}) => {
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    console.log("Selected City:", selectedCity);
    console.log("Selected Experience:", selectedExp);

    let filtered = jobs;

    if (selectedCity !== "" && selectedCity !== "default") {
      filtered = filtered.filter((job) => job.location === selectedCity);
    }

    if (selectedExp !== "") {
      filtered = filtered.filter((job) => job.experience === selectedExp);
    }

    if (
      selectedCity === "" ||
      (selectedCity === "default" && selectedExp === "")
    ) {
      filtered = jobs;
    }

    console.log("Filtered Jobs:", filtered);
    setFilteredJobs(filtered);
  }, [jobs, selectedCity, selectedExp]);

  return (
    <section
      className="flex flex-col w-full min-h-screen bg-cover bg-fixed bg-center justify-start items-center fadeIn"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        animation: "fadeIn 0.1s ease-in-out",
      }}
    >
      <div className="mx-3 md:w-[44rem] sm:w-full sm:px-4">
        <MainTitle
          textBig={
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold drop-shadow-xl backdrop-blur-[4px] sm:mt-6 fontpop-4 mb-1 sm:mx-0 leading-10">
              <span className="text-silver">
                <ConditionalText type="roleaction" />
              </span>{" "}
              <span className="text-bubblegum">{hireWord}</span>
            </h1>
          }
          textSmall={
            <h1 className="text-lg md:text-3xl text-gray-200 font-bold drop-shadow-xl px-[1px] backdrop-blur-[4px] fontpop-3 mt-2 md:mb-4 sm:-mb-[6rem]">
              Please choose your search details below:
            </h1>
          }
        />
      </div>

      <EventSetupForm onSubmit={onFormSubmit} />
      <AvailableJobs jobs={filteredJobs} />
    </section>
  );
};

export default HireSection;
