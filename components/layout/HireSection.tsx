import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";
import AvailableJobs, { Job } from "./AvailableJobs";
import AvailableStaff, { Staff } from "./AvailableStaff";
import EventSetupForm from "./EventSetupForm";
import MainTitle from "./MainTitle";
import ParallaxBackground from "./ParallaxBackground";
import Modal from "./Modal";
import Button from "./Button";
import ConditionalText from "./ConditionalText";
import AuthContext from "../Ctx/AuthContext";

interface HireSectionProps {
  backgroundUrl: string;
  hireWord: string;
  selectedCity: string;
  selectedExp: string;
  jobs: Job[];
  staffList?: Staff[];
  onFormSubmit: (city: string, exp: string) => void;
}

const HireSection: React.FC<HireSectionProps> = ({
  backgroundUrl,
  hireWord,
  selectedCity,
  selectedExp,
  jobs,
  staffList = [],
  onFormSubmit,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const authCtx = useContext(AuthContext);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [filteredStaff, setFilteredStaff] = useState<Staff[]>(staffList);
  const [showModal, setShowModal] = useState(false);
  const [jobDetails, setJobDetails] = useState("");
  const [appliedJobIndex, setAppliedJobIndex] = useState<number | null>(null);
  const [contactedStaffIndex, setContactedStaffIndex] = useState<number | null>(
    null
  );
  const [appliedJobIndices, setAppliedJobIndices] = useState<number[]>(() => {
    const storedJobIndices = localStorage.getItem(
      `appliedJobIndices-${hireWord}`
    );
    return storedJobIndices ? JSON.parse(storedJobIndices) : [];
  });
  const [contactedStaffIndices, setContactedStaffIndices] = useState<number[]>(
    () => {
      const storedStaffIndices = localStorage.getItem(
        `contactedStaffIndices-${hireWord}`
      );
      return storedStaffIndices ? JSON.parse(storedStaffIndices) : [];
    }
  );

  const toggleModal = useCallback(() => {
    setShowModal((prev) => !prev);
  }, []);

  useEffect(() => {
    let filteredJobsList = jobs;

    if (selectedCity !== "" && selectedCity !== "default") {
      filteredJobsList = filteredJobsList.filter(
        (job) => job.location === selectedCity
      );
    }

    if (selectedExp !== "") {
      filteredJobsList = filteredJobsList.filter(
        (job) => job.experience === selectedExp
      );
    }

    if (
      selectedCity === "" ||
      (selectedCity === "default" && selectedExp === "")
    ) {
      filteredJobsList = jobs;
    }

    setFilteredJobs(filteredJobsList);
  }, [jobs, selectedCity, selectedExp]);

  useEffect(() => {
    let filteredStaffList: Staff[] = staffList || [];

    if (selectedCity !== "" && selectedCity !== "default") {
      filteredStaffList = filteredStaffList.filter(
        (staff) => staff.location === selectedCity
      );
    }

    if (selectedExp !== "") {
      filteredStaffList = filteredStaffList.filter(
        (staff) => staff.experience === selectedExp
      );
    }

    if (
      selectedCity === "" ||
      (selectedCity === "default" && selectedExp === "")
    ) {
      filteredStaffList = staffList;
    }

    setFilteredStaff(filteredStaffList);
  }, [staffList, selectedCity, selectedExp]);

  const handleApply = useCallback(() => {
    if (appliedJobIndex !== null) {
      const updatedJobs = [...filteredJobs];
      updatedJobs[appliedJobIndex].hasApplied = true;
      setFilteredJobs(updatedJobs);
      setAppliedJobIndices((prevIndices) => {
        const newIndices = [...prevIndices, appliedJobIndex];
        localStorage.setItem(
          `appliedJobIndices-${hireWord}`,
          JSON.stringify(newIndices)
        );
        return newIndices;
      });
      setAppliedJobIndex(null);
      toggleModal();
    }
  }, [appliedJobIndex, filteredJobs, toggleModal, hireWord]);

  const handleContactStaff = useCallback(() => {
    if (contactedStaffIndex !== null) {
      const updatedStaff = [...filteredStaff];
      updatedStaff[contactedStaffIndex].isContacted = true;
      setFilteredStaff(updatedStaff);
      setContactedStaffIndices((prevIndices) => {
        const newIndices = [...prevIndices, contactedStaffIndex];
        localStorage.setItem(
          `contactedStaffIndices-${hireWord}`,
          JSON.stringify(newIndices)
        );
        return newIndices;
      });
      setContactedStaffIndex(null);
      toggleModal();
    }
  }, [contactedStaffIndex, filteredStaff, toggleModal, hireWord]);

  const handleCancel = useCallback(() => {
    setAppliedJobIndex(null);
    setContactedStaffIndex(null);
    toggleModal();
  }, [toggleModal]);

  const renderModalContent = useCallback(() => {
    return (
      <div className="grid font-semibold text-color2 sm:text-md text-justify">
        {authCtx?.isLoggedInPro ? (
          <p className="py-4">{jobDetails}</p>
        ) : (
          <textarea
            className="border border-color1 rounded-xl p-2"
            placeholder="We'll send an SMS to their phone including your event details. Enter any additional info here if necessary."
            name=""
            id=""
            cols={30}
            rows={8}
          ></textarea>
        )}
        <Button
          type="button"
          text={`${authCtx?.isLoggedInPro ? "Apply" : "Send Message"}`}
          onClick={authCtx?.isLoggedInPro ? handleApply : handleContactStaff}
        />
        <Button type="button" text="Cancel" onClick={handleCancel} />
      </div>
    );
  }, [jobDetails, handleApply, handleContactStaff, handleCancel, authCtx]);

  return (
    <section className="flex flex-col w-full min-h-screen bg-cover bg-fixed bg-center justify-start items-center fadeIn">
      <ParallaxBackground imgSource={backgroundUrl} />
      <Modal
        ref={ref}
        showModal={showModal}
        modalPanelTitle={`${
          authCtx?.isLoggedInPro ? "Job Details" : "Job Details (optional)"
        }`}
        renderModalContent={renderModalContent()}
        toggleModal={toggleModal}
        onCancel={handleCancel}
      />
      <div id="maintitle" className="mx-3 md:w-[44rem] sm:w-full sm:px-4">
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
      {authCtx?.isLoggedInPro ? (
        <AvailableJobs
          jobs={filteredJobs}
          onViewDetails={(details: string, index: number) => {
            setJobDetails(details);
            setAppliedJobIndex(index);
            toggleModal();
          }}
          appliedJobIndices={appliedJobIndices}
        />
      ) : authCtx?.isLoggedInEmp ? (
        <AvailableStaff
          staff={filteredStaff}
          onSendMessage={(index: number) => {
            setContactedStaffIndex(index);
            toggleModal();
          }}
          contactedStaffIndices={contactedStaffIndices}
        />
      ) : null}
    </section>
  );
};

export default HireSection;
