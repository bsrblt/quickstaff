import { motion } from "framer-motion";
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
  start: string;
  end: string;
  jobs: Job[];
  staffList?: Staff[];
}

const HireSection: React.FC<HireSectionProps> = ({
  backgroundUrl,
  hireWord,
  selectedCity,
  selectedExp,
  start,
  end,
  jobs,
  staffList = [],
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const authCtx = useContext(AuthContext);
  const [showEventSetupForm, setShowEventSetupForm] = useState(true);
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

  const toggleEventSetupForm = () => {
    setShowEventSetupForm((prev) => !prev);
  };

  const submitHandler = () => setShowEventSetupForm(false);
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

  const renderModalContent = useCallback(
    (index: number) => {
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
            text={`${
              authCtx?.isLoggedInPro && !appliedJobIndices.includes(index)
                ? "Apply"
                : authCtx?.isLoggedInPro && appliedJobIndices.includes(index)
                ? "Applied"
                : authCtx?.isLoggedInEmp &&
                  !contactedStaffIndices.includes(index)
                ? "Send Message"
                : "Message Sent"
            }`}
            onClick={authCtx?.isLoggedInPro ? handleApply : handleContactStaff}
            disabled={
              (authCtx?.isLoggedInPro && appliedJobIndices.includes(index)) ||
              (authCtx?.isLoggedInEmp && contactedStaffIndices.includes(index))
            }
          />
          <Button type="button" text="Cancel" onClick={handleCancel} />
        </div>
      );
    },
    [
      jobDetails,
      handleApply,
      handleContactStaff,
      handleCancel,
      authCtx,
      appliedJobIndices,
      contactedStaffIndices,
    ]
  );

  const ModalContentWrapper: React.FC<{ index: number }> = ({ index }) => {
    return renderModalContent(index);
  };

  return (
    <section
      className="flex flex-col w-full min-h-screen bg-cover bg-fixed bg-center justify-start items-center fadeIn"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1))",
      }}
    >
      <ParallaxBackground imgSource={backgroundUrl} />
      <Modal
        ref={ref}
        showModal={showModal}
        modalPanelTitle={`${
          authCtx?.isLoggedInPro ? "Job Details" : "Job Details (optional)"
        }`}
        renderModalContent={
          <ModalContentWrapper
            index={appliedJobIndex || contactedStaffIndex || 0}
          />
        }
        toggleModal={toggleModal}
        onCancel={handleCancel}
        appliedJobIndices={appliedJobIndices}
      />
      <div id="maintitle" className="md:w-[45rem] sm:w-full sm:px-4 mx-3">
        <MainTitle
          textBig={
            <h1 className="text-6xl md:text-7xl lg:text-[5rem] font-bold drop-shadow-xl fontpop-4 mb-1 leading-2">
              <span className="text-silver">
                <ConditionalText type="roleaction" />
              </span>{" "}
              <span className="text-bubblegum">{hireWord}</span>
            </h1>
          }
          textSmall={
            <h1 className="text-lg md:text-3xl text-gray-200 font-bold drop-shadow-xl px-[1px] fontpop-3 mt-2 md:mb-4 sm:-mb-[6rem]">
              Browse and filter the list in line with your needs.
            </h1>
          }
        />
      </div>
      <div
        id="content"
        className="flex flex-col md:w-[44rem] w-[93%] bg-silver/70 rounded-xl"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-white text-start md:text-2xl text-xl fontpop-3 p-3 mx-[0.35rem]">
            {authCtx?.isLoggedInPro ? "Available Jobs" : "Available Staff"}
          </h1>
          <div
            id="fltr"
            className="md:w-[14rem] w-[11rem] mb-2 px-5 py-2 md:text-md text-sm z-10"
          >
            <Button
              type="button"
              text={showEventSetupForm ? "Hide Filters" : "Show Filters"}
              onClick={() => {
                toggleEventSetupForm();
              }}
            />
          </div>
        </div>
        <motion.div
          initial={{ height: 0, opacity: 0, y: -100 }}
          animate={{
            height: showEventSetupForm ? "auto" : 0,
            opacity: showEventSetupForm ? 1 : 0,
            y: showEventSetupForm ? 0 : -80,
          }}
          transition={{ duration: 0.5 }}
          style={{ overflow: "hidden" }}
        >
          <EventSetupForm onSubmit={submitHandler} />
        </motion.div>
      </div>
      {authCtx?.isLoggedInPro ? (
        <AvailableJobs
          jobs={filteredJobs}
          onViewDetails={(details: string, index: number) => {
            setJobDetails(details);
            setAppliedJobIndex(index);
            toggleModal();
          }}
          appliedJobIndices={appliedJobIndices}
          renderModalContent={(index: number) => renderModalContent(index)}
        />
      ) : authCtx?.isLoggedInEmp ? (
        <AvailableStaff
          staff={filteredStaff}
          onSendMessage={(index: number) => {
            setContactedStaffIndex(index);
            toggleModal();
          }}
          contactedStaffIndices={contactedStaffIndices}
          renderModalContent={(index: number) => renderModalContent(index)}
        />
      ) : null}
    </section>
  );
};

export default HireSection;
