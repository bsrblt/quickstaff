import Dater from "@/components/layout/Dater";
import MainTitle from "./MainTitle";
import ConditionalText from "./ConditionalText";
import { useContext, useState } from "react";
import AuthContext from "../Ctx/AuthContext";
import getJobs from "../utils/hooks/jobListings";

interface HireSectionProps {
  backgroundUrl: string;
  hireWord: string;
  service: string;
  children?: React.ReactNode;
}

const HireSection: React.FC<HireSectionProps> = ({
  backgroundUrl,
  hireWord,
  service,
}) => {
  const authCtx = useContext(AuthContext);
  const eventWord = authCtx?.isLoggedInPro ? "available work" : "event";
  const [showJobs, setShowJobs] = useState<boolean>(false);
  const [filteredJobs, setFilteredJobs] = useState<
    {
      jobTitle: string;
      startDate: string;
      endDate: string;
      location: string;
      experience: string;
      description: string;
    }[]
  >([]);

  const onDateSubmit = (startDate: string, endDate: string) => {
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    const jobs = getJobs();
    const filtered = jobs.filter(
      (job) =>
        job.location === service &&
        job.startDate >= startDate &&
        job.endDate <= endDate
    );
    setFilteredJobs(filtered);
    setShowJobs(true);
  };

  return (
    <section
      className="flex flex-col w-full h-screen bg-cover bg-fixed bg-center justify-start items-center fadeIn"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        animation: "fadeIn 0.1s ease-in-out",
      }}
    >
      <div className="sm:mt-10 mx-3">
        <MainTitle
          textBig={
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold drop-shadow-xl  backdrop-blur-[6px] sm:mt-20 fontpop-4 mb-1">
              <span className="text-silver">
                <ConditionalText type="roleaction" />
              </span>{" "}
              <span className="text-white">{hireWord}</span>
            </h1>
          }
          textSmall={
            <h1 className="text-xl md:text-4xl text-silver font-bold drop-shadow-xl px-[1px]  backdrop-blur-[6px] fontpop-3 mt-2">
              {`Please enter your ${eventWord} dates below:`}
            </h1>
          }
        />
      </div>
      <Dater onDateSubmit={onDateSubmit} />
      <div className="mt-4">
        {showJobs && (
          <>
            <h2 className="text-2xl font-bold mb-2">Available Jobs:</h2>
            <div className="space-y-4">
              {filteredJobs.map((job, index) => (
                <div key={index} className="bg-white/20 p-4 rounded-xl">
                  <h3 className="text-xl font-bold">{job.jobTitle}</h3>
                  <p className="text-gray-200">{job.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default HireSection;
