import React, { useContext, useState, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "../Ctx/AuthContext";
import Button from "./Button";
import InputField from "./InputField";
import Modal from "./Modal";
import DashboardCard from "./DashboardCard";
import JobItem from "./JobItem";
import ManagementItem from "./ManagementItem";
import profile from "../../public/userpen.svg";
import fingerprint from "../../public/fp.svg";
import privacy from "../../public/privacy.svg";
import jobsearch from "../../public/jobsearch.svg";
import completedjobs from "../../public/completedjobs.svg";
import okdate from "../../public/okdate.svg";
import support from "../../public/support.svg";
import settings from "../../public/settings.svg";
import turnoff from "../../public/turnoff.svg";
import crown from "../../public/crown.svg";
import getInputClasses from "../utils/inputClasses";

const DashboardContent: React.FC = () => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);
  const inputClasses = getInputClasses(authCtx);

  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const toggleModal = useCallback(() => {
    setShowModal((prev) => !prev);
    setCurrentStep(1);
  }, []);

  const clickHandler = useCallback(() => {
    console.log("clicked");
  }, []);

  const handleNextStep = useCallback(() => {
    setCurrentStep((prevStep) => prevStep + 1);
  }, []);
  const handlePrevStep = useCallback(() => {
    setCurrentStep((prevStep) => prevStep - 1);
  }, []);

  const firstNameInput = (
    <InputField
      className={inputClasses.firstNameInputClass}
      type="text"
      id="firstname"
      label="First Name"
      value={authCtx?.firstNameInput}
      onChange={authCtx?.firstNameChange || (() => {})}
      minLength={3}
      maxLength={20}
      placeholder="your firstname"
    />
  );
  const lastNameInput = (
    <InputField
      className={inputClasses.lastNameInputClass}
      type="text"
      id="lastname"
      label="Last Name"
      value={authCtx?.lastNameInput}
      onChange={authCtx?.lastNameChange || (() => {})}
      minLength={3}
      maxLength={20}
      placeholder="your lastname"
    />
  );
  const phoneNumberInput = (
    <InputField
      label="Phone Number"
      type="text"
      id="phoneNumber"
      value={authCtx?.phoneNumberInput}
      onChange={authCtx?.phoneNumberChange || (() => {})}
      minLength={3}
      maxLength={20}
      placeholder="Your phone number"
      className={inputClasses.phoneNumberInputClass}
    />
  );

  const renderModalContent = useMemo(() => {
    switch (currentStep) {
      case 1:
        return (
          <div className="grid gap-4">
            <InputField
              label="Input 1"
              type="text"
              id="input1"
              placeholder="Enter input 1"
              value={authCtx?.regularInput}
              onChange={() => {}}
              className={inputClasses.regularInputClass}
            />
            <InputField
              label="Input 2"
              type="text"
              id="input2"
              placeholder="Enter input 2"
              value=""
              onChange={() => {}}
              className={inputClasses.regularInputClass}
            />
            <Button
              type="button"
              className=" text-white py-2 px-4 rounded-md"
              onClick={handleNextStep}
            >
              Next
            </Button>
            <Button
              type="button"
              className=" text-white py-2 px-4 rounded-md"
              onClick={toggleModal}
            >
              Cancel
            </Button>
          </div>
        );
      case 2:
        return (
          <div className="grid gap-4">
            {firstNameInput}
            {lastNameInput}
            <Button type="button" onClick={handleNextStep}>
              Next
            </Button>
            <Button type="button" onClick={handlePrevStep}>
              Back
            </Button>
          </div>
        );
      case 3:
        return (
          <div className="grid gap-4">
            {phoneNumberInput}
            <InputField
              label="Input 6"
              type="text"
              id="input6"
              value=""
              onChange={() => {}}
              className={inputClasses.regularInputClass}
            />
            <Button
              type="button"
              className=" text-white py-2 px-4 rounded-md"
              onClick={toggleModal}
            >
              Submit
            </Button>
            <Button
              type="button"
              className=" text-white py-2 px-4 rounded-md"
              onClick={handlePrevStep}
            >
              Back
            </Button>
          </div>
        );
      default:
        return null;
    }
  }, [currentStep, authCtx, handleNextStep, handlePrevStep, toggleModal]);

  const DashboardCards = [
    {
      imageSrc: profile,
      altText: "profile picture",
      title: "Profile",
      onClick: toggleModal,
    },
    {
      imageSrc: settings,
      altText: "settings",
      title: "Settings",
      onClick: clickHandler,
    },
    {
      imageSrc: crown,
      altText: "premium",
      title: "Premium",
      onClick: () => router.push("/premium"),
    },
  ];

  const JobItems = [
    {
      link: "/#staffselect",
      image: jobsearch,
      alt: "search jobs",
      text: authCtx?.isLoggedInPro ? "Find New Job" : "Find Event Staff",
      onClick: undefined,
    },
    {
      link: "",
      image: completedjobs,
      alt: "completed jobs",
      text: authCtx?.isLoggedInPro ? "Completed Jobs" : "Completed Events",
      onClick: clickHandler,
    },
    {
      link: "",
      image: okdate,
      alt: "security",
      text: authCtx?.isLoggedInPro
        ? "Set Your Availability"
        : "Create New Event",
      onClick: clickHandler,
    },
  ];

  const ManagementItems = [
    { image: privacy, alt: "privacy", text: "Privacy" },
    { image: fingerprint, alt: "security", text: "Security" },
    { image: support, alt: "support", text: "Support" },
    {
      image: turnoff,
      alt: "logout",
      text: "Logout",
      onClick: (e: React.MouseEvent) => authCtx?.logout(e),
    },
  ];

  return (
    <section className="px-6  py-16 sm:mx-3 text-color2">
      <Modal
        showModal={showModal}
        renderModalContent={renderModalContent}
        toggleModal={toggleModal}
      />
      <div className="relative grid gap-5 md:grid-cols-6 fadeIn035">
        {DashboardCards.map((card, index) => (
          <DashboardCard key={index} {...card} />
        ))}
        <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200 text-color2 items-start">
          <h2 className="my-3 text-center font-semibold text-gray-950 sm:text-2xl text-xl">
            {authCtx?.isLoggedInPro ? "Jobs" : "Events"}
          </h2>
          <div className="grid sm:grid-cols-3">
            {JobItems.map((item, index) => (
              <JobItem key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200 text-color2 items-start">
          <h2 className="my-3 text-center font-semibold text-gray-950 text-2xl">
            Management
          </h2>
          <div className="grid sm:grid-cols-4 grid-cols-2">
            {ManagementItems.map((item, index) => (
              <ManagementItem
                key={index}
                image={item.image}
                alt={item.alt}
                text={item.text}
                onClick={item.onClick}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardContent;
