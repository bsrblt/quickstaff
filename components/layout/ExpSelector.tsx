import React from "react";

interface ExpSelectorProps {
  selectedExp: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  inputClass: string;
  notChosenText: string;
  labelClass: string;
}

const ExpSelector: React.FC<ExpSelectorProps> = ({
  selectedExp,
  onChange,
  inputClass,
  notChosenText,
  labelClass,
}) => {
  return (
    <div className="grid text-lg">
      <label htmlFor="experience" className={labelClass}>
        Experience
      </label>
      <select
        id="experience"
        value={selectedExp}
        onChange={onChange}
        className={inputClass}
      >
        <option value="">{`${notChosenText}`}</option>
        <option value="0-1 year">0-1 year</option>
        <option value="2-5 years">2-5 years</option>
        <option value="5-10 years">5-10 years</option>
        <option value="10+ years">10+ years</option>
      </select>
    </div>
  );
};

export default ExpSelector;
