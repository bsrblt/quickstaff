import Link from "next/link";
import StaffSelectionCard from "./StaffSelectionCard";
import managericon from "../../public/manager-user-svgrepo-com.svg";
import cheficon from "../../public/chef2.svg";
import barmanicon from "../../public/barman-svgrepo-com.svg";
import waitericon from "../../public/waiter-svgrepo-com.svg";
import cleanericon from "../../public/cleaner.svg";
import chauffeuricon from "../../public/car.svg";
import performericon from "../../public/performer1.svg";
import techicon from "../../public/tech.svg";
import ConditionalText from "./ConditionalText";

const staffTypes = [
  {
    imageSrc: managericon,
    altText: "manager",
    title: "manager",
    availability: "23 available",
  },
  {
    imageSrc: cheficon,
    altText: "chef",
    title: "chef",
    availability: "102 available",
  },
  {
    imageSrc: barmanicon,
    altText: "bartender",
    title: "bartender",
    availability: "72 available",
  },
  {
    imageSrc: waitericon,
    altText: "waiter",
    title: "waiter",
    availability: "216 available",
  },
  {
    imageSrc: cleanericon,
    altText: "cleaner",
    title: "cleaner",
    availability: "69 available",
  },
  {
    imageSrc: chauffeuricon,
    altText: "chauffeur",
    title: "chauffeur",
    availability: "299 available",
  },
  {
    imageSrc: performericon,
    altText: "performer",
    title: "performer",
    availability: "17 available",
  },
  {
    imageSrc: techicon,
    altText: "technician",
    title: "technician",
    availability: "21 available",
  },
];

const StaffSelection: React.FC = () => {
  return (
    <div className=" min-w-full sm:mt-[8rem] mt-[8.8rem] mb-5">
      <div id="staffselect" className="sm:h-8 h-12"></div>
      <section className="w-full sm:py-[36px] px-2 lg:px-7 space-y-8 text-xl text-center bg-gradient-to-b from-color1/60  ...">
        <div className="container mx-auto px-[12px] md:px-0 xl:px-12 lg:px-18 ">
          <Link href="#staffselect">
            <h1 className="text-white block md:text-5xl sm:text-4xl text-xl font-bold text-center md:pb-6 md:my-6 pb-10 pt-4 sm:pt-0">
              <ConditionalText type="staff" />
            </h1>
          </Link>
          <div className="grid grid-cols-1 sm:pt-11 pt-6 md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 gap-x-4 gap-y-[1rem] sm:gap-y-[5rem] md:gap-y-24 lg:gap-y-20 sm:mt-2 md:mt-12 -mt-10 space-x-0">
            {staffTypes.map((staffType, index) => (
              <StaffSelectionCard
                key={index}
                imageSrc={staffType.imageSrc}
                altText={staffType.altText}
                title={staffType.title}
                availability={staffType.availability}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StaffSelection;
