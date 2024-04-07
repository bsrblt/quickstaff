import React, {
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  ChangeEvent,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
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
import usercheck from "../../public/usercheck.svg";
import getInputClasses from "../utils/inputClasses";
import CitySelector from "./CitySelector";
import ExpSelector from "./ExpSelector";
import JobSelector from "./JobSelector";

const DashboardContent: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const authCtx = useContext(AuthContext);
  const inputClasses = getInputClasses(authCtx);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedExp, setSelectedExp] = useState("");
  const [selectedJob, setSelectedJob] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const ref = useRef<HTMLDivElement>(null);

  const toggleModal = useCallback(() => {
    setShowModal((prev) => !prev);
    setCurrentStep(1);
  }, []);
  const clickHandler = useCallback(() => {
    console.log("clicked");
  }, []);

  const nextStepHandler = useCallback(() => {
    setCurrentStep((prev) => prev + 1);
  }, []);
  const prevStepHandler = useCallback(() => {
    setCurrentStep((prev) => prev - 1);
  }, []);

  const cityChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCity(e.target.value);
  };
  const jobChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedJob(e.target.value);
  };
  const expChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedExp(e.target.value);
  };
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

  const spinner = (
    <svg
      aria-hidden="true"
      className="inline w-11 h-14 text-color1 animate-spin dark:text-gray-600 fill-color2"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  );
  const submitHandler = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowModal(false);
      }, 1000);
    }, 1000);
  };

  const renderModalContent = () => {
    if (pathname === "/employer/dashboard") {
      switch (currentStep) {
        case 1:
          return (
            <div className="grid gap-4">
              {firstNameInput}
              {lastNameInput}
              <Button
                type="button"
                className=" text-white py-2 px-4 rounded-md"
                onClick={nextStepHandler}
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
              {!isSubmitting && !submitted ? (
                <>
                  {phoneNumberInput}
                  <CitySelector
                    labelClass="block mb-2 sm:text-sm text-xs pl-[2px] text-gray-600 dark:text-gray-200"
                    selectedCity={selectedCity}
                    onChange={cityChangeHandler}
                    inputClass={inputClasses.validInputClass}
                  />
                </>
              ) : isSubmitting ? (
                <div className="block w-full px-[5.4rem] sm:py-12 py-[2.75rem] sm:mt-2 ">
                  {spinner}
                </div>
              ) : submitted ? (
                <div className="block w-full px-[3.5rem] sm:py-[1.4rem] pt-[1rem] pb-[1.33rem] sm:mt-2 mb-[1px] ml-1 fadeIn035">
                  <Image
                    src={usercheck}
                    alt="submitted successfully"
                    height={105}
                  />
                </div>
              ) : null}
              <div className={submitted ? "grid gap-4 mt-[1px]" : "grid gap-4"}>
                <Button type="button" onClick={submitHandler}>
                  {isSubmitting ? "Saving..." : submitted ? "Saved" : "Save"}
                </Button>
                {!submitted && (
                  <Button type="button" onClick={prevStepHandler}>
                    Back
                  </Button>
                )}
              </div>
            </div>
          );
        default:
          return null;
      }
    } else if (pathname === "/pro/dashboard") {
      switch (currentStep) {
        case 1:
          return (
            <div className="grid gap-4">
              {firstNameInput}
              {lastNameInput}
              <Button
                type="button"
                className=" text-white py-2 px-4 rounded-md"
                onClick={nextStepHandler}
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
              {phoneNumberInput}
              <CitySelector
                labelClass="block mb-2 sm:text-sm text-xs pl-[2px] text-gray-600 dark:text-gray-200"
                selectedCity={selectedCity}
                onChange={cityChangeHandler}
                inputClass={inputClasses.validInputClass}
              />
              <Button type="button" onClick={nextStepHandler}>
                Next
              </Button>
              <Button type="button" onClick={prevStepHandler}>
                Back
              </Button>
            </div>
          );
        case 3:
          return (
            <div className="grid gap-4 ">
              {!isSubmitting && !submitted ? (
                <>
                  <JobSelector
                    labelClass="block mb-2 sm:text-sm text-xs pl-[2px] text-gray-600 dark:text-gray-200"
                    selectedJob={selectedJob}
                    onJobChange={jobChangeHandler}
                    className={inputClasses.validInputClass}
                  />
                  <ExpSelector
                    labelClass="block mb-1 sm:text-sm text-xs pl-[2px] text-gray-600 dark:text-gray-200"
                    selectedExp={selectedExp}
                    onChange={expChangeHandler}
                    inputClass={inputClasses.validInputClass}
                    notChosenText="- select -"
                  />
                </>
              ) : isSubmitting ? (
                <div className="block w-full px-[5.4rem] sm:py-12 py-[2.75rem] sm:mt-2 ">
                  {spinner}
                </div>
              ) : submitted ? (
                <div className="block w-full px-[3.5rem] sm:py-[1.4rem] pt-[1rem] pb-[1.33rem] sm:mt-2 mb-[1px] ml-1 fadeIn035">
                  <Image
                    src={usercheck}
                    alt="submitted successfully"
                    height={105}
                  />
                </div>
              ) : null}
              <div
                className={
                  submitted
                    ? "relative grid  gap-4 mt-[1px]"
                    : "relative grid  gap-4"
                }
              >
                <Button
                  type="button"
                  className=" text-white py-2 px-4 rounded-md"
                  onClick={submitHandler}
                >
                  {isSubmitting ? "Saving..." : submitted ? "Saved" : "Save"}
                </Button>
                {!submitted && (
                  <Button
                    type="button"
                    className=" text-white py-2 px-4 rounded-md"
                    onClick={prevStepHandler}
                  >
                    Back
                  </Button>
                )}
              </div>
            </div>
          );
        default:
          return null;
      }
    } else return;
  };

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node) && showModal) {
        toggleModal();
      }
    },
    [toggleModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);

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
    {
      image: support,
      alt: "support",
      text: "Support",
      onClick: () => router.push("/error"),
    },
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
        ref={ref}
        showModal={showModal}
        renderModalContent={renderModalContent()}
        toggleModal={toggleModal}
      />
      <div className="relative grid gap-5 md:grid-cols-6 fadeIn035">
        {DashboardCards.map((card, index) => (
          <DashboardCard key={index} {...card} />
        ))}
        <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white items-start">
          <h2 className="my-3 text-center font-semibold sm:text-2xl text-xl">
            {authCtx?.isLoggedInPro ? "Jobs" : "Events"}
          </h2>
          <div className="grid sm:grid-cols-3">
            {JobItems.map((item, index) => (
              <JobItem key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white items-start">
          <h2 className="my-3 text-center font-semibold sm:text-2xl text-xl">
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
