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

interface AvailableStaffProps {
  staff: Staff[];
  onSendMessage: (index: number) => void;
  contactedStaffIndices: (boolean | number)[];
  buttonText?: string;
}

const AvailableStaff: React.FC<AvailableStaffProps> = ({
  staff,
  onSendMessage,
  contactedStaffIndices,
}) => {
  return (
    <div className="grid items-center justify-center my-4">
      <section className="flex mt-5 px-3 justify-center">
        <div className="space-y-4 md:w-[44rem]">
          {staff.length > 0 ? (
            staff.map((staff, index) => (
              <GlassCard key={index}>
                <div className="bg-color1/30 rounded-xl p-3">
                  <div className="sm:flex justify-between items-center sm:space-x-5">
                    <div className="flex flex-col text-white font-bold fontpop-3 tracking-wide">
                      <h3 className="text-lg ">
                        {staff.firstName} {staff.lastName}
                      </h3>
                      <p className="text-md">
                        {staff.jobTitle.charAt(0).toUpperCase() +
                          staff.jobTitle.substring(1).toLowerCase()}{" "}
                        located in{" "}
                        {staff.location.charAt(0).toUpperCase() +
                          staff.location.substring(1).toLowerCase()}{" "}
                        - Experience level: {staff.experience}
                      </p>{" "}
                    </div>
                    <div className="min-w-[12.4rem] mb-2 px-2 transition-all duration-300">
                      <Button
                        type="button"
                        onClick={() => onSendMessage(index)}
                        disabled={contactedStaffIndices.includes(index)}
                      >
                        {contactedStaffIndices.includes(index)
                          ? "Message Sent"
                          : "Contact"}
                      </Button>
                    </div>
                  </div>
                </div>
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
