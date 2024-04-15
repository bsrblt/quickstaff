import React, { useState, useEffect, useRef, useCallback } from "react";
import AvailableJobs, { Job } from "./AvailableJobs";
import EventSetupForm from "./EventSetupForm";
import MainTitle from "./MainTitle";
import ConditionalText from "./ConditionalText";
import ParallaxBackground from "./ParallaxBackground";
import Modal from "./Modal";
import Button from "./Button";

interface HireSectionProps {
  backgroundUrl: string;
  hireWord: string;
  selectedCity: string;
  selectedExp: string;
  jobs: Job[];
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
  const ref = useRef<HTMLDivElement>(null);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [showModal, setShowModal] = useState(false);
  const [jobDetails, setJobDetails] = useState("");
  const [appliedJobs, setAppliedJobs] = useState<boolean[]>(
    Array(jobs.length).fill(false)
  );

  const toggleModal = useCallback(() => {
    setShowModal((prev) => !prev);
  }, []);

  useEffect(() => {
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

    setFilteredJobs(filtered);
  }, [jobs, selectedCity, selectedExp]);

  const onViewDetails = useCallback(
    (details: string) => {
      setJobDetails(details);
      toggleModal();
    },
    [toggleModal]
  );

  const handleApply = (index: number) => {
    const updatedAppliedJobs = [...appliedJobs];
    updatedAppliedJobs[index] = true;
    setAppliedJobs(updatedAppliedJobs);
    toggleModal();
  };

  const renderModalContent = useCallback(() => {
    return (
      <div className="grid gap-4 font-semibold text-color2 sm:text-md text-justify">
        <section>
          <p>{jobDetails}</p>
          <Button
            type="button"
            text="Apply"
            onClick={() => handleApply(appliedJobs.indexOf(false))}
          />
          <Button type="button" text="Cancel" onClick={toggleModal} />
        </section>
      </div>
    );
  }, [jobDetails, handleApply, toggleModal, appliedJobs]);

  return (
    <section className="flex flex-col w-full min-h-screen bg-cover bg-fixed bg-center justify-start items-center fadeIn">
      <ParallaxBackground imgSource={`${backgroundUrl}`} />
      <div className="text-color2">
        <Modal
          ref={ref}
          showModal={showModal}
          modalPanelTitle="Job Details"
          renderModalContent={renderModalContent()}
          toggleModal={toggleModal}
        />
      </div>
      <div className="mx-3 md:w-[44rem] sm:w-full sm:px-4">
        <MainTitle
          textBig={
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold drop-shadow-xl fontpop-4 mb-1 leading-10">
              <span className="text-silver">
                <ConditionalText type="roleaction" />
              </span>{" "}
              <span className="text-bubblegum">{hireWord}</span>
            </h1>
          }
          textSmall={
            <h1 className="text-lg md:text-3xl text-gray-200 font-bold drop-shadow-xl px-[1px] fontpop-3 mt-2 md:mb-4 sm:-mb-[6rem]">
              Please choose your search terms below:
            </h1>
          }
        />
      </div>
      <EventSetupForm onSubmit={onFormSubmit} />
      <AvailableJobs
        jobs={filteredJobs}
        onViewDetails={onViewDetails}
        appliedJobs={appliedJobs}
      />
    </section>
  );
};

export default HireSection;
