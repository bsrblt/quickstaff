import React, { useState, ChangeEvent, useContext } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";
import InputField from "./InputField";
import AuthContext from "../Ctx/AuthContext";
import getInputClasses from "../utils/inputClasses";

interface EventSetupFormProps {
  onSubmit: (startDate: string, endDate: string, selectedCity: string) => void;
}

const EventSetupForm: React.FC<EventSetupFormProps> = ({ onSubmit }) => {
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedCity, setSelectedCity] = useState("default");
  const [selectedExp, setSelectedExp] = useState("");
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const inputClass = getInputClasses(authCtx);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("City:", selectedCity);
    !(authCtx?.isLoggedInEmp || authCtx?.isLoggedInPro)
      ? router.replace("/employer/login")
      : onSubmit(startDate, endDate, selectedCity);
  };
  const changeHandler = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };
  const checkbox1ChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckbox1(e.target.checked);
  };
  const checkbox2ChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckbox2(e.target.checked);
  };

  const startDateInputField = (
    <div className="grid text-xl font-semibold text-white drop-shadow-xl">
      <label
        htmlFor="startdate"
        className="block ml-[2px] font-normal sm:text-lg md:text-xl text-md"
      >
        Starts @
      </label>
      <InputField
        id="startdate"
        type="date"
        required
        className={inputClass.dateInputClass}
        value={startDate}
        onChange={(e) => changeHandler(e, setStartDate)}
      />
    </div>
  );
  const endDateInputField = (
    <div className="grid text-xl font-semibold text-white drop-shadow-xl">
      <label
        htmlFor="enddate"
        className="block ml-[2px] font-normal  sm:text-lg md:text-xl text-md"
      >
        Ends @
      </label>
      <InputField
        id="enddate"
        type="date"
        required
        className={inputClass.dateInputClass}
        value={endDate}
        onChange={(e) => changeHandler(e, setEndDate)}
      />
    </div>
  );
  const citySelector = (
    <div className="grid text-xl font-semibold text-white drop-shadow-xl">
      <div>
        <label
          htmlFor="city"
          className="block ml-[2px] font-normal  sm:text-lg md:text-xl text-md mb-2"
        >
          City
        </label>
        <select
          id="city"
          value={selectedCity}
          onChange={(e) =>
            changeHandler(e as ChangeEvent<HTMLSelectElement>, setSelectedCity)
          }
          className={inputClass.selectorClass}
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
  const expSelector = (
    <div className="grid text-xl text-white  drop-shadow-xl">
      <label
        htmlFor="experience"
        className="ml-[2px] sm:text-lg md:text-xl text-md md:mb-2 sm:mb-0 mb-2"
      >
        Experience
      </label>
      <select
        id="experience"
        value={selectedExp}
        onChange={(e) =>
          changeHandler(e as ChangeEvent<HTMLSelectElement>, setSelectedExp)
        }
        className={inputClass.selectorClass}
      >
        <option value="">- any -</option>
        <option value="0-1 year">0-1 year</option>
        <option value="2-5 years">2-5 years</option>
        <option value="5-10 years">5-10 years</option>
        <option value="10+ years">10+ years</option>
      </select>
    </div>
  );
  const collabCheckboxes = (
    <div className="space-y-[0.65rem] sm:mt-0 mt-4 mb-2">
      <label
        htmlFor="collab"
        className="ml-[1px] sm:text-lg md:text-xl text-xl"
      >
        Collab
      </label>
      <div>
        <label
          htmlFor="solocheckbox"
          className="text-white sm:text-lg md:text-xl text-md cursor-pointer"
        >
          <input
            type="checkbox"
            id="solocheckbox"
            checked={checkbox1}
            onChange={checkbox1ChangeHandler}
            className="h-4 w-4 mr-1 rounded-sm border border-silver"
          />{" "}
          Solo
        </label>
      </div>
      <div>
        <label
          htmlFor="teamcheckbox"
          className="text-white sm:text-lg md:text-xl text-md cursor-pointer"
        >
          <input
            type="checkbox"
            id="teamcheckbox"
            checked={checkbox2}
            onChange={checkbox2ChangeHandler}
            className="h-4 w-4 mr-1 rounded-sm border border-silver"
          />{" "}
          Teamwork
        </label>
      </div>
    </div>
  );

  return (
    <form
      className="sm:grid backdrop-blur-[6px] shadow-xl bg-color1/50 pt-3 sm:pb-1 pb-4 px-4  mb-1 rounded-xl sm:space-y-5 space-y-3 fontpop-3 md:w-[44rem] w-[95%]"
      onSubmit={submitHandler}
    >
      <section className="flex flex-col sm:flex-row md:gap-10 sm:gap-4">
        <div className="space-y-4 mb-4">
          {startDateInputField}
          {endDateInputField}
        </div>
        <div className="space-y-4">
          {citySelector}
          {expSelector}
        </div>
        <div className="space-y-4 md:w-[14rem]">
          {collabCheckboxes}
          <Button type="submit" text="Submit" />
        </div>
      </section>
    </form>
  );
};

export default EventSetupForm;
