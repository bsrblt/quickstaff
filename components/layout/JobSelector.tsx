import React from "react";

interface JobSelectorProps {
  selectedJob: string;
  onJobChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className: string;
  labelClass: string;
}

const JobSelector: React.FC<JobSelectorProps> = ({
  selectedJob,
  onJobChange,
  className,
  labelClass,
}) => {
  return (
    <div>
      <label htmlFor="job selector" className={labelClass}>
        Job
      </label>
      <select
        id="job selector"
        value={selectedJob}
        onChange={onJobChange}
        className={className}
      >
        <option value="">- select -</option>
        <option value="manager">Manager</option>
        <option value="chef">Chef</option>
        <option value="bartender">Bartender</option>
        <option value="waiter">Waiter</option>
        <option value="cleaner">Cleaner</option>
        <option value="chauffeur">Chauffeur</option>
        <option value="performer">Performer</option>
        <option value="technician">Technician</option>
      </select>
    </div>
  );
};

export default JobSelector;
