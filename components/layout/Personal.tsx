import React, { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
import Link from "next/link";
import AuthContext from "../Ctx/AuthContext";

const Personal = () => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);

  const clickHandler = () => {
    console.log("clicked");
  };

  interface DashboardCardProps {
    imageSrc: string;
    altText: string;
    title: string;
    onClick: () => void;
  }

  const DashboardCard: React.FC<DashboardCardProps> = ({
    imageSrc,
    altText,
    title,
    onClick,
  }) => {
    return (
      <div
        className="col-span-full md:col-span-2 overflow-hidden flex relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 cursor-pointer"
        onClick={onClick}
      >
        <div className="flex flex-col size-fit m-auto relative justify-center items-center md:h-auto h-[12rem]">
          <Image src={imageSrc} alt={altText} width={175} />

          <h2 className="sm:mt-6 mt-3 text-center font-semibold text-gray-950 dark:text-white sm:text-2xl text-xl">
            {title}
          </h2>
        </div>
      </div>
    );
  };

  interface JobItemProps {
    link: string;
    image: string;
    alt: string;
    text: string;
    onClick?: () => void;
  }

  const JobItem: React.FC<JobItemProps> = ({
    link,
    image,
    alt,
    text,
    onClick,
  }) => (
    <Link href={link}>
      <div
        className="flex flex-col justify-between items-center relative space-y-1 lg:space-y-6 cursor-pointer"
        onClick={onClick}
      >
        <Image src={image} alt={alt} width={100} />
        <h2 className="mt-6 text-center font-semibold text-gray-950 sm:text-xl text-lg sm:pb-0 pb-6">
          {text}
        </h2>
      </div>
    </Link>
  );

  const JobsSection: React.FC = () => {
    const searchText = authCtx?.isLoggedInPro
      ? "Find New Job"
      : "Find Event Staff";
    const dateText = authCtx?.isLoggedInPro
      ? "Set Your Availability"
      : "Create New Event";
    const completedText = authCtx?.isLoggedInPro
      ? "Completed Jobs"
      : "Completed Events";

    const jobItems = [
      {
        link: "/#staffselect",
        image: jobsearch,
        alt: "search jobs",
        text: searchText,
        onClick: undefined,
      },
      {
        link: "",
        image: completedjobs,
        alt: "completed jobs",
        text: completedText,
        onClick: clickHandler,
      },
      {
        link: "",
        image: okdate,
        alt: "security",
        text: dateText,
        onClick: clickHandler,
      },
    ];

    return (
      <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200 text-color2 items-start">
        <h2 className="my-3 text-center font-semibold text-gray-950 sm:text-2xl text-xl">
          {authCtx?.isLoggedInPro ? "Jobs" : "Events"}
        </h2>
        <div className="grid sm:grid-cols-3">
          {jobItems.map((item, index) => (
            <JobItem key={index} {...item} />
          ))}
        </div>
      </div>
    );
  };

  interface ManagementItemProps {
    image: string;
    alt: string;
    text: string;
    onClick?: (e: React.MouseEvent) => void;
  }

  const ManagementItem: React.FC<ManagementItemProps> = ({
    image,
    alt,
    text,
    onClick,
  }) => (
    <div
      className="flex flex-col justify-between items-center relative space-y-1 lg:space-y-6 cursor-pointer"
      onClick={onClick}
    >
      <Image src={image} alt={alt} width={100} />
      <h2 className="mt-6 text-center font-semibold text-gray-950 text-xl sm:pb-0 pb-6">
        {text}
      </h2>
    </div>
  );

  const ManagementSection: React.FC = () => {
    const managementItems = [
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
      <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200 text-color2 items-start">
        <h2 className="my-3 text-center font-semibold text-gray-950 text-2xl">
          Management
        </h2>
        <div className="grid sm:grid-cols-4 grid-cols-2">
          {managementItems.map((item, index) => (
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
    );
  };

  return (
    <section className="mx-auto px-6 max-w-6xl py-16 sm:mx-3 text-color2">
      <div className="relative grid gap-5 md:grid-cols-6 fadeIn035">
        <DashboardCard
          imageSrc={profile}
          altText="profile picture"
          title="Profile"
          onClick={clickHandler}
        />
        <DashboardCard
          imageSrc={settings}
          altText="settings"
          title="Settings"
          onClick={clickHandler}
        />
        <DashboardCard
          imageSrc={crown}
          altText="premium"
          title="Premium"
          onClick={() => router.push("/premium")}
        />
        <JobsSection />
        <ManagementSection />
      </div>
    </section>
  );
};

export default Personal;
