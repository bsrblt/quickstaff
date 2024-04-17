import React from "react";

interface CitySelectorProps {
  selectedCity: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  inputClass: string;
  labelClass: string;
}

const CitySelector: React.FC<CitySelectorProps> = ({
  selectedCity,
  onChange,
  inputClass,
  labelClass,
}) => {
  return (
    <div className="grid text-lg">
      <div>
        <label htmlFor="city" className={labelClass}>
          City
        </label>
        <select
          id="city"
          value={selectedCity}
          onChange={onChange}
          className={inputClass}
          required
        >
          <option value="default">- select -</option>
          <option value="Istanbul">Istanbul</option>
          <option value="London">London</option>
          <option value="Paris">Paris</option>
          <option value="Madrid">Madrid</option>
        </select>
      </div>
    </div>
  );
};

export default CitySelector;
