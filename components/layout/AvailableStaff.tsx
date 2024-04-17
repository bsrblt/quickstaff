import React from "react";
import GlassCard from "./GlassCard";
import Button from "./Button";

export interface Staff {
  firstName: string;
  lastName: string;
  jobTitle: string;
  startDate?: string;
  endDate?: string;
  location: string;
  experience: string;
  isContacted?: boolean;
}

interface StaffCardProps {
  staff: Staff;
  index: number;
  onSendMessage: (index: number) => void;
  contacted: boolean;
}

const StaffCard: React.FC<StaffCardProps> = ({
  index,
  staff,
  onSendMessage,
  contacted,
}) => (
  <div
    className={`bg-${
      contacted ? "color2/30" : "color1/40"
    } rounded-xl p-3 cursor-pointer`}
    onClick={() => onSendMessage(index)}
  >
    <div className="sm:flex justify-between items-center sm:space-x-5">
      <div className="flex flex-col text-white fontpop-3 tracking-wide">
        <h3
          className={`text-${
            contacted ? "gray-400" : "white"
          } fontpop-3 text-lg font-bold`}
        >
          {staff.firstName} {staff.lastName}
        </h3>
        <p
          className={`text-${
            contacted ? "gray-300" : "white"
          } fontpop-3 text-md`}
        >
          {staff.jobTitle.charAt(0).toUpperCase() +
            staff.jobTitle.substring(1).toLowerCase()}{" "}
          with {staff.experience} experience, located in{" "}
          {staff.location.charAt(0).toUpperCase() +
            staff.location.substring(1).toLowerCase()}
          .
        </p>{" "}
      </div>
      <div className="min-w-[12.4rem] mb-2 px-2 transition-all duration-300">
        <Button type="button" disabled={contacted}>
          {contacted ? "Message Sent" : "Contact"}
        </Button>
      </div>
    </div>
  </div>
);

interface AvailableStaffProps {
  staff: Staff[];
  onSendMessage: (index: number) => void;
  contactedStaffIndices: number[];
  renderModalContent: (index: number) => JSX.Element;
}

const AvailableStaff: React.FC<AvailableStaffProps> = ({
  staff,
  onSendMessage,
  contactedStaffIndices,
}) => {
  return (
    <div className="grid items-center justify-center -mt-1 mb-4">
      <section className="flex mt-5 px-3 justify-center">
        <div className="space-y-4 md:w-[44rem]">
          {staff.length > 0 ? (
            staff.map((staff, index) => (
              <GlassCard key={index}>
                <StaffCard
                  staff={staff}
                  index={index}
                  onSendMessage={onSendMessage}
                  contacted={contactedStaffIndices.includes(index)}
                />
              </GlassCard>
            ))
          ) : (
            <p className="text-white text-center bg-color2 rounded-xl">
              No staff are available in these terms.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default AvailableStaff;
