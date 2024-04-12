import React, { useState, ChangeEvent, useContext } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";
import InputField from "./InputField";
import AuthContext from "../Ctx/AuthContext";
import getInputClasses from "../utils/inputClasses";
import CitySelector from "./CitySelector";
import ExpSelector from "./ExpSelector";
import Checkbox from "./Checkbox";

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
  const checkboxChangeHandler = (
    e: ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setter(e.target.checked);
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

  return (
    <form
      className="sm:grid backdrop-blur-[6px] shadow-xl bg-color1/50 pt-3 sm:pb-1 pb-4 px-4  mb-1 rounded-xl sm:space-y-5 space-y-3 fontpop-3 md:w-[44rem] w-[95%]"
      onSubmit={submitHandler}
    >
      <section className="flex flex-col sm:flex-row md:gap-10 sm:gap-4">
        <div className="space-y-4 mb-4 text-white">
          {startDateInputField}
          {endDateInputField}
        </div>
        <div className="space-y-4 text-white">
          <CitySelector
            selectedCity={selectedCity}
            inputClass={inputClass.selectorClass}
            labelClass="block ml-[2px] font-normal  sm:text-lg md:text-xl text-md mb-2"
            onChange={(e) => changeHandler(e, setSelectedCity)}
          />
          <ExpSelector
            notChosenText="- any -"
            labelClass="ml-[2px] sm:text-lg md:text-xl text-md md:mb-2 sm:mb-0 mb-2"
            selectedExp={selectedExp}
            inputClass={inputClass.selectorClass}
            onChange={(e) => changeHandler(e, setSelectedExp)}
          />
        </div>
        <div className="space-y-4 md:w-[14rem]">
          <div className="space-y-[0.91rem] sm:mt-0 mt-4 mb-2 text-white">
            <label
              htmlFor="collab"
              className="ml-[1px] sm:text-lg md:text-xl text-xl"
            >
              Collab
            </label>
            <Checkbox
              id="solo checkbox"
              checkbox={checkbox1}
              onChangeCheck={(e) => checkboxChangeHandler(e, setCheckbox1)}
              checkboxText="Solo"
            />
            <Checkbox
              id="team checkbox"
              checkbox={checkbox2}
              onChangeCheck={(e) => checkboxChangeHandler(e, setCheckbox2)}
              checkboxText="Teamwork"
            />
          </div>
          <Button type="submit" text="Submit" />
        </div>
      </section>
    </form>
  );
};

export default EventSetupForm;
